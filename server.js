const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const products = [
  { id: 1, name: 'T-shirt', price: 19.99 },
  { id: 2, name: 'Mug', price: 9.99 },
  { id: 3, name: 'Sticker', price: 2.99 }
];

app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => console.log(`E-Commerce backend listening on ${port}`));
