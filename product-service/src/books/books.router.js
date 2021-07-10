const router = require('express').Router();
const data = require('./books');


router.get(
    '/products',
     async (req,res) => {
       const bookEntity = await res.json(data);
      res.status(200).send(bookEntity);
    }
  );
 

  module.exports = router;
