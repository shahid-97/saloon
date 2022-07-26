const Sequelize = require("sequelize");
const bcrypt = require('bcryptjs')
const sequelize = require('../../../config/db.connection');
const jwt = require("jsonwebtoken");
const Customer = require('../../../models/customers')(sequelize, Sequelize);

/**
 * @action PostSignUp()
 * 
 * @description singup in function
 */
 exports.PostSignUp = (req, res, next) => {
    console.log('signing up ...');
    // const name=req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;
   
}