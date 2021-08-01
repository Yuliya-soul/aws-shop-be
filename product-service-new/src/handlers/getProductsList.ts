"use strict";
import { APIGatewayProxyHandler } from "aws-lambda";
const { Client } = require("pg");
import { dbOptions } from "../options";
import { winstonLogger } from "../utils/winstonLogger";

export const getProductsList: APIGatewayProxyHandler = async (event) => {
  const client = new Client(dbOptions);
  client.connect();
  try {
    winstonLogger.logRequest(
      `Incoming event getProductsList lambda: ${JSON.stringify(event)}`
    );
    const query = ` 
      SELECT p.id, p.title, p.description, p.price,p.years,p.author,p.picture, s.count
      FROM products p
      LEFT JOIN stocks s
      ON s.product_id = p.id`;
    const response = await client.query(query);

    winstonLogger.logRequest(
      `"Received products: ${JSON.stringify(response.rows)}`
    );
    winstonLogger.logRequest(`Lambda successfully invoked and finished`);
    return await {
      statusCode: 200,
      body: JSON.stringify(response.rows),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    winstonLogger.logError(`Error: ${error.message}`);
    return await {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message || "Error during database request executing",
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  } finally {
    client.end();
  }
};
