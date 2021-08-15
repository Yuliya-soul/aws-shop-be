import * as csv from "csv-parser";
const BUCKET = 'import-service-5';

export const importFileParser =
  ({ s3, logger }) =>
  async (event) => {
    event.Records.forEach((record) => {
      const params = { Bucket: BUCKET, Key: record.s3.object.key };
      const s3Stream = s3.getObject({ params }).createReadStream();

      s3Stream
        .pipe(csv())
        .on("data", (data) => {
          logger.log(data);
        })
        .on("error", (error) => logger.log(error))
        .on("end", async () => {
          logger.log(`Copy from ${BUCKET}/${record.s3.object.key}`);

          await s3
            .copyObject({
              Bucket: BUCKET,
              CopySource: `${BUCKET}/${record.s3.object.key}`,
              Key: record.s3.object.key.replace("uploaded", "parsed"),
            })
            .promise();
            await s3.deleteObject({
              Bucket: BUCKET,
              Key: record.s3.object.key,
          }).promise();


          logger.log(
            `Copied into ${BUCKET}/${record.s3.object.key.replace(
              "uploaded",
              "parsed"
            )}`
          );
        });
    });
  };
