import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
	service: 'product-service-new',
	frameworkVersion: '2',
	custom: {
		webpack: {
			webpackConfig: './webpack.config.js',
			includeModules: true,
		},
	},
	plugins: ['serverless-webpack','serverless-offline'],
	provider: {
		name: 'aws',
		runtime: 'nodejs14.x',
		region: 'eu-west-1',
		apiGateway: {
			minimumCompressionSize: 1024,
			shouldStartNameWithService: true,
		},
		environment: {
			AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
		},
		lambdaHashingVersion: '20201221',
	},
	functions: {
		getProductsList: {
			handler: 'src/handlers/getProductsList.getProductsList',
			events: [
				{
					http: {
						method: 'get',
						path: 'products',
						cors: true,
					},
				},
			],
		},
		getProductsById: {
			handler: 'src/handlers/getProductsById.getProductsById',
			events: [
				{
					http: {
						method: 'get',
						path: 'products/{id}',
						cors: true,
					},
				},
			],
		},
	},
};

module.exports = serverlessConfiguration;
