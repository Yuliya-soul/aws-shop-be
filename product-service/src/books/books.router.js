  
const router = require('express').Router();
const data = require('./books');
const middy = require('middy')
const { cors } = require('middy/middlewares')

router.get(
    '/products',
     async (req,res) => {
       const bookEntity = await res.json(data);
      res.status(200).send(bookEntity);
    }
  );

const handler = middy(router)
.use(cors()) 

  module.exports = handler;