const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  searchProducts,
  getProduct
} = require('../controllers/products');

router.route('/')
  .get(getAllProducts);

router.route('/search')
  .get(searchProducts);

router.route('/:id')
  .get(getProduct);

module.exports = router;