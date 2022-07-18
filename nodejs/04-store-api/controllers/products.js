const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  const products = await Product.find({}, { '__v': 0 });
  return res.status(200).json({ nEntries: products.length, products });
};

const searchProducts = async (req, res) => {
  const { name,
    featured,
    company,
    sort,
    fields,
    limit,
    page,
    numericFilters } = req.query;

  // Initialise query object
  const queryObject = {};

  // Use regex to filter by name
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }

  // Handle numeric filters
  console.log(numericFilters);
  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '<': '$lt',
      '>=': '$gte',
      '<=': '$lte',
      '=': '$eq'
    }
    const regEx = /\b(>|>=|=|<|<=)\b/g;
    const options = ['price', 'rating'];
    let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`);
    filters.split(',').forEach((item) => {
      const [field, op, val] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = {[op]: Number(val)};
      }
    });
  }

  // Add featured field
  if (featured) {
    if (featured === 'true') {
      queryObject.featured = true;
    } else if (featured === 'false') {
      queryObject.featured = false;
    }
  }
  // Add company field
  if (company && ['ikea', 'liddy', 'caressa', 'marcos'].includes(company)) {
    queryObject.company = company;
  }

  // Sort, which is chained to the .find() method
  let result = Product.find(queryObject);
  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  } else {
    result = result.sort('createdAt');
  }

  // Select fields
  if (fields) {
    const fieldList = fields.split(',').join(' ');
    result = result.select(fieldList);
  }

  // Handle pagination and limit per page
  const pageNum = Number(page) || 1
  const limitNum = Number(limit) || 10
  const skip = (pageNum - 1) * limitNum;
  result = result.skip(skip).limit(limitNum);

  // Put await only after all chained mongoose queries have been registered
  const products = await result;
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