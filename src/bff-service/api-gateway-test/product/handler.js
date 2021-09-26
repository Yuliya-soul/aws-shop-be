module.exports.product = (event, context, cb) => {
  const appResponse = {
    api: "product",
    id:"1874569",
    name: "product",
    quantity:200,
    manufacture:"Rs school"

  };
  const response = {
    statusCode: 200,
    body: JSON.stringify(appResponse),
  };

  return cb(null, response);
};
