exports.handler = function (event, context, callback) {
  console.log("Event =", JSON.stringify(event));

  if (event["type"] != "TOKEN") {
    callback("Unauthorized");
  }
  try {
    const token = event.authorizationToken;
    const encodedCreds = token.split(" ")[1];
    const buff = Buffer.from(encodedCreds, "base64");
    const plainCredits = buff.toString("utf-8").split(":");
    const userName = plainCredits[0];
    const password = plainCredits[1];

    console.log("username", userName, "password", password);

    const storedUserPassword = process.env[userName];

    const effect =
      !storedUserPassword || storedUserPassword !== password ? "Deny" : "Allow";

    const policy = generatePolicy(encodedCreds, effect, event.methodArn);
    callback(null, policy);
  } catch (e) {
    callback(`Unauthorized: ${e}`);
  }
};

const generatePolicy = (principalId, effect = "Allow", resource) => {
  return {
    principalId: principalId,
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: effect,
          Resource: resource,
        },
      ],
    },
  };
};
