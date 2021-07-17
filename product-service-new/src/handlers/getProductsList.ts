import books from './books.json'
import { APIGatewayProxyHandler } from 'aws-lambda'

export const getProductsList: APIGatewayProxyHandler = async () => {
try{
	return await{
		statusCode: 200,
		body: JSON.stringify(books),
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	}
}	
catch (error) {
	return error
  }
}
