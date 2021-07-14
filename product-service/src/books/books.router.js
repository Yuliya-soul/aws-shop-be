  
const router = require('express').Router();
const data = require('./books');
const middy = require('middy')
const { cors } = require('middy/middlewares');

 router.get('/products', async (req,res,next) => {
  try{
     const bookEntity = await  res.status(200).send(data);
     return bookEntity
  }
  catch (error) {
      return next(error)
    }
  }
  );


const handler = middy(router)
.use(cors()) 


  module.exports = handler;