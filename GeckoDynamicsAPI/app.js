var express = require('express');
var app = express();

var productRoutes = require('./api/routes/products.js');

app.use('/products', productRoutes);
app.use('/', (req, res, next) => {
    res.status(200).json("Hello! This is Arie Gurin's Node.js with Express API. Try /products to access the api data.");
});

module.exports = app;