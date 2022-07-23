const express = require('express');

const authController = require('../../controllers/admin/auth');

const app = express.Router();

/**
 * @api
 * @route /login
 * 
 * @description api to login
 */
app.post('/log-in', authController.postLogin)

module.exports = app;

