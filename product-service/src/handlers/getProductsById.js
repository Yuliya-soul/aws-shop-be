const serverless = require("serverless-http");
const express = require("express");
const app = express();
const bookRouter = require('../books/books1.router');
const cors = require('cors')


app.get("/products/:productById",cors(), bookRouter);

module.exports.productById = serverless(app);