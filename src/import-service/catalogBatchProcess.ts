import * as AWS from "aws-sdk";

export const catalogBatchProcess = async (event, context, callback) => {
  try {
    console.log(`event=`, event);
    const books = await event.Records.map((item) => JSON.parse(item.body));
    const attr = JSON.stringify(
      event.Records[0].messageAttributes.Title.stringValue
    );
    console.log("attr", attr);
    const sns = new AWS.SNS({ region: "us-east-1" });
    console.log("butch request to catalog took books", books);

    // Create publish parameters
    var params = {
      Subject: "hi subscriber here new books in your shop",
      Message: `message ${JSON.stringify(books)}`,
      TopicArn: process.env.SNS_ARN,
    };
    var paramsCustom = {
      Subject: "hi subscriber here new books in your shop",
      Message: `message ${JSON.stringify(books)}`,
      TopicArn: process.env.SNS_ARN_CUSTOM,
    };
    var results, resultsCustom;
    if (attr === JSON.stringify("admin")) {
      results = await sns
        .publish(params, (err, data) => {
          if (err) console.log(err, err.stack);
          else console.log("admin:", data);
        })
        .promise();
    }
    if (attr === JSON.stringify("newUser")) {
      resultsCustom = await sns
        .publish(paramsCustom, (err, data) => {
          if (err) console.log(err, err.stack);
          else console.log("user", data);
        })
        .promise();
    }
    callback(null, results, resultsCustom);
  } catch (error) {
    return error;
  }
};
