const serverless = require("serverless-http");
const express = require("express");


const app = express();

app.get("/products/:productById", (req, res, next) => {
  return res.status(200).json({
    message: `Your id order was ${req.params.productById} `,
  });
});



module.exports.productById = serverless(app);