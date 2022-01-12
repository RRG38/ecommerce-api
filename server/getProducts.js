const products = require("../products.json");

const getProducts = (req, res) => {
  const price = req.query?.price;

  if (price) {
    const filteredList = products.filter((product) => product.price >= price);
    return res.status(200).send(filteredList);
  } else {
    console.log(`Price not found`);
    res.status(200).send(products);
  }
};

module.exports = getProducts;
