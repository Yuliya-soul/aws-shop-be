const data = require('./books');
const router = require('express').Router();

router.get(
    '/products/:productById',
     async (req, res) => {
     const book = data.filter(function(val){
        return val.id === req.params.productById;
      });
      const bookEntity = await res.json(book);
      res.status(200).send(bookEntity);
    }
  );
  module.exports = router;   