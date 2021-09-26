module.exports.product = (event, context, cb) => {
  const appResponse = {
    api: "product-third-party",
    uuid:"1869",
    productName: "third-party",
    amount:6,
    producer:"Me"

  };
  const response = {
    statusCode: 200,
    body: JSON.stringify(appResponse),
  };

  return cb(null, response);
};
