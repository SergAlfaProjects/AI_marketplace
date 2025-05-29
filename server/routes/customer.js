const express = require('express');
const router = express.Router();

router.get('/cart', (req, res) => {
  res.json({ message: 'Customer cart' });
});

module.exports = router;
