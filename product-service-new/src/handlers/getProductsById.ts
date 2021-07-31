"use strict";
import { APIGatewayProxyHandler } from "aws-lambda";
const { Client } = require("pg");
import { dbOptions } from "../options";

export const getProductsById: APIGatewayProxyHandler = async (event) => {
  const client = new Client(dbOptions);
  client.connect();
  try {
    const { id } = event.pathParameters;
    const query = ` 
		SELECT p.id, p.title, p.description, p.price, s.count         
		  FROM products p                                 
		  LEFT JOIN stocks s                                  
		  ON s.product_id = p.id                              
		 WHERE p.id = '${id}'  `;
    const response = await client.query(query);
    const BookFound = response.rows[0];

    return await {
      statusCode: 200,
      body: JSON.stringify(BookFound),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    return await {
      statusCode: 404,
      body: JSON.stringify({
        message: `Book not found`,
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