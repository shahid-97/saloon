const express = require('express');
const adminCrtl = require('../../../src/controllers/admin.controller');

const router = express.Router();
router.get('/get-order', adminCrtl.getOrders);
module.exports = router;