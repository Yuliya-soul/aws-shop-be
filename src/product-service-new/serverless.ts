import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "product-service-new-4",
  app: "lesson4-new",
  frameworkVersion: "2",
  useDotenv: true,
  configValidationMode: "warn",

  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
  },
  plugins: ["serverless-webpack", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    region: "us-east-1",

    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },

    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      PG_HOST: process.env.DB_HOST,
      PG_PORT: process.env.PG_PORT,
      PG_DATABASE: process.env.PG_DATABASE,
      PG_USERNAME: process.env.PG_USERNAME,
      PG_PASSWORD: process.env.PG_PASSWORD,

    },
    lambdaHashingVersion: "20201221",
  },

  functions: {
    getProductsList: {
      handler: "src/handlers/getProductsList.getProductsList",
      events: [
        {
          http: {
            method: "get",
            path: "products",
            cors: true,
          },
        },
      ],
    },
    getProductsById: {
      handler: "src/handlers/getProductsById.getProductsById",
      events: [
        {
          http: {
            method: "get",
            path: "products/{id}",
            cors: true,
          },
        },
      ],
    },

    postProducts: {
      handler: "src/handlers/postProducts.postProducts",
      events: [
        {
          http: {
            method: "post",
            path: "post/products",
            cors: true,
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
