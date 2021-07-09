const serverless = require("serverless-http");
const express = require("express");
const app = express();
const bookRouter = require('../books/books.router');

app.get("/products", bookRouter);


app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found 404",
  });
});

module.exports.products = serverless(app);
