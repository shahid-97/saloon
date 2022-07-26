const express = require('express');

const categoryController = require('./../../controllers/admin/category');

const app = express.Router();

/**
 * @api 
 * @route /get-category
 * 
 * @description api to get products.
 */
app.get('/get-category', categoryController.getCategory);

/**
 * @api
 * @route /add-product
 * 
 * @description api to add product
 */
app.post('/add-category', categoryController.addCategory)

/**
 * @api
 * @route /update-product
 * 
 * @description api to update product
 */
app.put('/update-category/:id', categoryController.updateCategory)

/**
 * @api
 * @route /delete-product
 * 
 * @description api to delete product
 */
app.delete('/delete-category/:id', categoryController.deleteCategory)

/**
 * @api
 * @route /delete-all-product
 * 
 * @description api to delete all products
 */
 app.delete('/delete-all-category', categoryController.deleteAllCategory)

module.exports = app;