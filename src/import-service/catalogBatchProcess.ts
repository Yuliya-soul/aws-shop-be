import type { Handler } from "aws-lambda";
import { SQSEvent } from "aws-lambda/trigger/sqs";
import * as AWS from "aws-sdk";

export const catalogBatchProcess: Handler<SQSEvent, void> = async (event) => {
  const books = event.Records.map(({ body }) => JSON.parse(body));
  const sns = new AWS.SNS({ region: "eu-east-1" });

  console.log("butch request to catalog took books", books);


};
