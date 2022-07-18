const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  const products = await Product.find({}, { '__v': 0 });
  return res.status(200).json({ nEntries: products.length, products });
};

const searchProducts = async (req, res) => {
  const { name, featured, company, sort } = req.query;
  const queryObject = {};
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }
  if (featured) {
    if (featured === 'true') {
      queryObject.featured = true;
    } else if (featured === 'false') {
      queryObject.featured = false;
    }
  }
  if (company && ['ikea', 'liddy', 'caressa', 'marcos'].includes(company)) {
    queryObject.company = company;
  }
  const products = await Product.find(queryObject, { '__v': 0 });
  return res.status(200).json({ nEntries: products.length, products });
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({ '_id': id }, { '__v': 0 })
  res.status(200).json({ product });
};

module.exports = {
  getAllProducts,
  searchProducts,
  getProduct
}