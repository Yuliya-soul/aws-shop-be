const data = require('./books');
const router = require('express').Router();
const middy = require('middy')
const { cors } = require('middy/middlewares')

router.get(
    '/products/:productById',
     async (req, res) => {
     const book = data.filter((val)=>{
        return val.id === req.params.productById;
      });
      const bookEntity = await res.json(book);
       res.status(200).send(bookEntity);
    }
  );
  const handler = middy(router)
.use(cors()) 
module.exports = handler;