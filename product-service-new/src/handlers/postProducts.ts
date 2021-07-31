"use strict";
import { APIGatewayProxyHandler } from "aws-lambda";
const { Client } = require("pg");
import { dbOptions } from "../options";
import {product} from "../product";

export const postProducts: APIGatewayProxyHandler = async () => {
  const client = new Client(dbOptions);
  client.connect();
  try {
    await client.query("BEGIN");

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

    const querySelectProduct = `SELECT p.id, p.title, p.description, p.price, s.count
        FROM products p
        LEFT JOIN stocks s
        ON s.product_id = p.id
         WHERE p.id = '${id}';
       `;
    const response = await client.query(querySelectProduct);
    await client.query("COMMIT");
    const bookPut = response.rows[0];

    return await {
      statusCode: 200,
      body: JSON.stringify(bookPut),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.end();
  }
};
