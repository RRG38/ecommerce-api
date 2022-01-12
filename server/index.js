const express = require("express");
const products = require("../products.json");

const app = express();

app.get("/api/products", (req, res) => {
  res.status(200).send(products);
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
