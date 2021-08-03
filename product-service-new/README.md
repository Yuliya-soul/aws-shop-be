endpoints:
  GET - https://5rqmnmnhw5.execute-api.us-east-1.amazonaws.com/dev/products
  GET - https://5rqmnmnhw5.execute-api.us-east-1.amazonaws.com/dev/products/{id}
  POST - https://5rqmnmnhw5.execute-api.us-east-1.amazonaws.com/dev/post/products
functions:
  getProductsList: product-service-new-4-dev-getProductsList
  getProductsById: product-service-new-4-dev-getProductsById
  postProducts: product-service-new-4-dev-postProducts