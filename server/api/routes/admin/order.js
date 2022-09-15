const express = require('express');
const adminCrtl = require('../../controllers/admin/order');

const router = express.Router();
router.get('/get-order', adminCrtl.getOrders);
module.exports = router;