"use strict";
import { APIGatewayProxyHandler } from "aws-lambda";
const { Client } = require("pg");
import { dbOptions } from "../options";

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
    client.end();
  }
};
