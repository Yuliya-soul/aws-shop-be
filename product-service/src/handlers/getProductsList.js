const serverless = require("serverless-http");
const express = require("express");
const app = express();
const bookRouter = require('../books/books.router');
const cors = require('cors')

app.get("/products", cors(), bookRouter);


app.use(cors(),(req, res, next) => {
  return res.status(404).json({
    error: "Not Found 404",
  });
});

module.exports.products = serverless(app);
