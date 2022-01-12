const express = require("express");
const getProducts = require("../server/getProducts");
const getProduct = require("../server/getProduct");

const app = express();

const port = 3001;

app.get("/api/products", getProducts);
app.get("/api/products/:id", getProduct);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
