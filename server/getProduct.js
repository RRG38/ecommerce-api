const products = require("../products.json");

const getProduct = (req, res) => {
  const index = parseInt(req.params.id, 10) - 1;

  if (products[index]) {
    res.status(200).send(products[index]);
  } else {
    res.status(500).send(`Item not in list`);
  }
};

module.exports = getProduct;
