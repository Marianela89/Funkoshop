const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopController');


router.get('/shop', shopControllers.shop);
router.get('/shop/item/:id', shopControllers.itemGET);
router.post('/shop/item/:id/add', shopControllers.itemPOST);
router.get('/shop/cart', shopControllers.cartGET);
router.post('/shop/cart', shopControllers.cartPOST);

module.exports = router;