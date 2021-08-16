import csv from "csv-parser";
import AWS from "aws-sdk";

export const importFileParser = async (event) => {
  const BUCKET = "import-service-5";
  const s3 = new AWS.S3({ region: "us-east-1" });

  try {
    for (const record of event.Records) {
      await new Promise<void>((resolve, reject) => {
        s3.getObject({
          Bucket: BUCKET,
          Key: decodeURI(record.s3.object.key),
        })
          .createReadStream()
          .pipe(csv())
          .on("data", (data) => console.log("Parsed new data", data))
          .on("end", () => resolve())
          .on("error", (error) => reject(error));
      });
      await s3
        .copyObject({
          Bucket: BUCKET,
          CopySource: `${BUCKET}/${record.s3.object.key}`,
          Key: decodeURI(record.s3.object.key).replace("uploaded", "parsed"),
        })
        .promise();
      await s3
        .deleteObject({
          Bucket: BUCKET,
          Key: decodeURI(record.s3.object.key),
        })
        .promise();

      console.log(
        `${decodeURI(
          record.s3.object.key
        )} has been moved to the /parsed folder`
      );
    }
  } catch (error) {
    console.log(error);
  }
};
