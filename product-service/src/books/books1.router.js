
const router = require('express').Router();
router.get(
    '/products/:productById',
     async (req, res) => {
      const bookEntity = await res.json({
        message: `Your id order was ${req.params.productById}`,
      });
      res.status(200).send(bookEntity);
    }
  );
  module.exports = router;   