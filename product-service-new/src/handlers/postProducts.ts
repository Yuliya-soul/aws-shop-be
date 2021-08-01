"use strict";
import { APIGatewayProxyHandler } from "aws-lambda";
const { Client } = require("pg");
import { dbOptions } from "../options";
import { product } from "../product";
import { winstonLogger } from "../utils/winstonLogger";

export const postProducts: APIGatewayProxyHandler = async (event) => {
  const client = new Client(dbOptions);
  client.connect();
  try {
    winstonLogger.logRequest(
      `Incoming event postProducts lambda: ${JSON.stringify(event)}`
    );
    await client.query("BEGIN");
    if (
      typeof product.title != "string" ||
      typeof product.years != "string" ||
      typeof product.author != "string" ||
      typeof product.description != "string" ||
      typeof product.price != "number" ||
      typeof product.picture != "string" ||
      typeof product.count != "number"
    ) {
      return await {
        statusCode: 400,
        body: JSON.stringify({
          message: `Product data is invalid. `,
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };
    }
    const queryInsertProduct = `
        INSERT INTO products(title,description,price,years,author,picture)
          VALUES
          ('${product.title}','${product.description}','${product.price}','${product.years}','${product.author}','${product.picture}')
          RETURNING id`;
    const {
      rows: [{ id }],
    } = await client.query(queryInsertProduct);

    const queryInsertCount = `INSERT INTO stocks(product_id, count)
          VALUES
          ('${id}', ${product.count});`;
    await client.query(queryInsertCount);

    const querySelectProduct = `SELECT p.id, p.title, p.description, p.price, p.years,p.author,p.picture,s.count
        FROM products p
        LEFT JOIN stocks s
        ON s.product_id = p.id
         WHERE p.id = '${id}';
       `;
    const response = await client.query(querySelectProduct);
    await client.query("COMMIT");
    const bookToPut = response.rows[0];
    winstonLogger.logRequest(`Created product: ${JSON.stringify(bookToPut)}`);
    winstonLogger.logRequest(`Lambda successfully invoked and finished`);
    return await {
      statusCode: 200,
      body: JSON.stringify(bookToPut),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    await client.query("ROLLBACK");
    winstonLogger.logError(`Error: ${error.message}`);
    return await {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message || `Product data is invalid`,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  } finally {
    client.end();
  }
};
