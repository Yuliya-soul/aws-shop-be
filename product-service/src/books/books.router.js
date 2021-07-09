
const router = require('express').Router();

router.get(
    '/products',
     async (req,res) => {
       const bookEntity = await res.json({
        message: `Hello there here are your products`,
      });
      res.status(200).send(bookEntity);
    }
  );
 

  module.exports = router;
