const serverless = require("serverless-http");
const express = require("express");
const app = express();
const bookRouter = require('../books/books1.router');



app.get("/products/:productById", bookRouter);

module.exports.productById = serverless(app);