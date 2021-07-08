const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/products", (req, res, next) => {
  return res.status(200).json({
    message: "Hello there here are your products^)))",
  });
});


app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found 404",
  });
});

module.exports.products = serverless(app);
