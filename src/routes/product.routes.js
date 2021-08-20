const express = require('express');

const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/product/', productController.listAll);
router.get('/product/:id', productController.getById);
router.post('/product/', productController.create);
router.put('/product/:id', productController.update);
router.delete('/product/:id', productController.delete);

module.exports = router;