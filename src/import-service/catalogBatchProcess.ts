import * as AWS from "aws-sdk";

export const catalogBatchProcess = async (event, context, callback) => {
  try {
    console.log(`event=`, event);
    const books = await event.Records.map((item) => JSON.parse(item.body));

    const sns = new AWS.SNS({ region: "us-east-1" });
    console.log("butch request to catalog took books", books);

    // Create publish parameters
    var params = {
      Subject: "hi subscriber here new books in your shop",
      Message: `message ${JSON.stringify(books)}` /* required */,
      TopicArn: process.env.SNS_ARN,
    };

    let results = await  sns.publish(params, (err, data) => {
      if(err) console.log(err, err.stack);
      else console.log("sns send:", data);
  }).promise();
  
  callback(null, results);
   
  } catch (error) {
    return error;
  }
};
