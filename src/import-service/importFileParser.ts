import csv from "csv-parser";
import AWS from "aws-sdk";

export const importFileParser = async (event) => {
  const BUCKET = "import-service-5";
  const s3 = new AWS.S3({ region: "us-east-1" });
  var sqs = new AWS.SQS({ apiVersion: "2012-11-05" });

  try {
    for (const record of event.Records) {
      const keyRecord = decodeURI(record.s3.object.key);
      await new Promise<void>((resolve, reject) => {
        s3.getObject({
          Bucket: BUCKET,
          Key: keyRecord,
        })
          .createReadStream()
          .pipe(csv())
          .on("data", (data) =>
            sqs.sendMessage(
              {
                QueueUrl: process.env.THE_QUEUE_URL,
                MessageBody: JSON.stringify(data),
              },
              (err, data) => {
                if (err) console.log(err, err.stack);
                else console.log(data);
              }
            )
          )
          .on("end", () => resolve())
          .on("error", (error) => reject(error));
      });

      await s3
        .copyObject({
          Bucket: BUCKET,
          CopySource: `${BUCKET}/${keyRecord}`,
          Key: keyRecord.replace("uploaded", "parsed"),
        })
        .promise();
      await s3
        .deleteObject({
          Bucket: BUCKET,
          Key: keyRecord,
        })
        .promise();

      console.log(
        `${decodeURI(keyRecord)} has been moved to the /parsed folder`
      );
    }
  } catch (error) {
    console.log(error);
  }
};
