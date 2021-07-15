const data = require('./books');
const router = require('express').Router();
const middy = require('middy')
const { cors } = require('middy/middlewares');


router.get( '/products/:productById', async (req, res,next) => {
  try{
    const book = data.filter((val)=>{
      return val.id === req.params.productById;
    });

if(book[0]!==undefined) return await res.status(200).send(book);
else return  res.status(404).json({
  error: "Book not Found 404",
});
   }
  catch (error) {
    return next(error)
  }
    }
  );
  const handler = middy(router)
.use(cors()) 
module.exports = handler;