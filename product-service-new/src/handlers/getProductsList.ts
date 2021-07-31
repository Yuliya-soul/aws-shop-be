"use strict";
import { APIGatewayProxyHandler } from "aws-lambda";
const { Client } = require("pg");

const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;
const dbOptions = {
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DATABASE,
  user: PG_USERNAME,
  password: PG_PASSWORD,
  ssl: {
    rejectUnauthorized: false, // to avoid warring in this example
  },
  connectionTimeoutMillis: 5000, // time in millisecond for termination of the database query
};

export const getProductsList: APIGatewayProxyHandler = async () => {
  const client = new Client(dbOptions);
  client.connect();
  try {
    const query = ` 
SELECT p.id, p.title, p.description, p.price, s.count
 FROM products p
 LEFT JOIN stocks s
  ON s.product_id = p.id`;
    const response = await client.query(query);

    return await {
      statusCode: 200,
      body: JSON.stringify(response.rows),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    console.error("Error during database request executing:", error);
  } finally {
    // in case if error was occurred, connection will not close automatically
    client.end(); // manual closing of connection
  }
};
