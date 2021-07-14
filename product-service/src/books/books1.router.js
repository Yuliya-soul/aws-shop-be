const data = require('./books');
const router = require('express').Router();
const middy = require('middy')
const { cors } = require('middy/middlewares');


router.get( '/products/:productById', async (req, res,next) => {
  try{
    const book = data.filter((val)=>{
      return val.id === req.params.productById;
    });
    const bookEntity = await res.status(200).send(book);
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