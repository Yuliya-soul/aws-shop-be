import books from './books.json'
import { APIGatewayProxyHandler } from 'aws-lambda'

export const getProductsById: APIGatewayProxyHandler = async (event) => {
	try{
		const { id } = event.pathParameters
		const BookFound = books.find(({ id: filmID }) => filmID === id)
		
		if(!BookFound) {
			return await{
				statusCode: 404,
				body: JSON.stringify({
					message: `Book not found`,
				}),
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
			}
		}
		
		return await{
			statusCode: 200,
			body: JSON.stringify(BookFound),
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		}
	}
	catch (error) {
		return error
	  }
	}





