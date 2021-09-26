const middy = require("middy");

import { errorResponse, successResponse } from "./src/utils/apiResponseBuilder";
import * as AWS from "aws-sdk";

const handler = async (event) => {
  try {
    const BUCKET = process.env.BUCKET;
    const s3 = new AWS.S3({
      region: "us-east-1",
      apiVersion: "2006-03-01",
      signatureVersion: "v4",
    });
    const catalogName = event.queryStringParameters.name;
    const catalogPath = `uploaded/${catalogName}`;

    const params = {
      Bucket: BUCKET,
      Key: catalogPath,
      ACL: "public-read",
      ContentType:"text/csv"
    };

    const url = await s3.getSignedUrlPromise("putObject", params);

    return successResponse(url);
  } catch (error) {
    errorResponse(error);
  }
};
export const importProductsFile = middy(handler);
