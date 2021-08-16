import { errorResponse, successResponse } from "./src/utils/apiResponseBuilder";
import AWS from "aws-sdk";

export const importProductsFile = async (event) => {
  try {
    const s3 = new AWS.S3({ region: "us-east-1", signatureVersion: "v4" });
    const catalogName = event.queryStringParameters.name;
    const catalogPath = `uploaded/${catalogName}`;

    const params = {
      Bucket: "import-service-5",
      Key: catalogPath,
    };

    const url = await s3.getSignedUrlPromise("putObject", params);

    return successResponse(url);
  } catch (error) {
    errorResponse(error);
  }
};
