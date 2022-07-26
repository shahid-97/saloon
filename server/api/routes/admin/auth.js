const express = require('express');

const authController = require('../../controllers/admin/auth');

const app = express.Router();

/**
 * @api
 * @route /log-in
 * 
 * @description api to login
 */
app.post('/log-in', authController.postLogin)

/**
 * @api
 * @route /sign-up
 * 
 * @description api to signup
 */
//  app.post('/log-in', authController.postSignUp)

module.exports = app;

