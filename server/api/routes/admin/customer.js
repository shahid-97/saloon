/* admin routes  */
const express = require('express');
const customerController = require('./../../controllers/admin/customer');
const app = express.Router();

/**
 * @api
 * 
 * @route '/add-customer'
 */

 app.get('/get-customer', customerController.getCustomer);

/**
 * @api
 * 
 * @route '/add-customer'
 */

app.post('/add-customer', customerController.addCustomer);

/**
 * @api
 * 
 * @route '/delete-customer/:id'
 */

app.put('/update-customer/:id', customerController.updateCustomer);

/**
 * @api
 * 
 * @route '/edit-customer/:id'
 */

 app.delete('/delete-customer/:id', customerController.deleteCustomer)



module.exports = app;