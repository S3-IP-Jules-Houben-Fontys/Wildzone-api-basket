const express = require("express");
const router = express.Router();

var product = require('../controllers/product_controller');
const db = require("../sequelize/models");

router.post('/add', product.addProduct); 

router.post('/update', product.updateProduct);

router.delete('/delete', product.deleteProduct);

router.get('/get', product.gerProducts);

router.get('/getById', product.gerProductById);

module.exports = router;