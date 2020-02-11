const express = require('express');
const router = express.Router()

// Controllers import
const productController = require('../Controllers/product');

// Get all products 
router.get('/products', productController.getProducts);

//Get one product
router.get('/product/:prodId', productController.getProduct);

//Add new product
router.post('/product', productController.postProduct);

//Delete a product
router.delete('/product/:prodId', productController.deleteProduct);
module.exports = router;