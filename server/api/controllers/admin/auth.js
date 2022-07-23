const Sequelize = require("sequelize");
const bcrypt = require('bcrypt')
const sequelize = require('../../../config/db.connection');
const Customer = require('../../../models/customers')(sequelize, Sequelize);

/**
 * @action postLogin()
 * 
 * @description log in function
 */
exports.postLogin = (req, res, next) => {
    console.log('logging in ...');
    const email = req.body.email;
    const password = req.body.password;
    Customer.findOne({ where: { email: email } })
        
        .then((user) => {
            const response = [];
            if (!user) {
                //no user
                response.push(['isUser=>false']);
                res.json(response)
                res.end()
            }
            else{
                response.push(['isUser=>true'])
            }
            bcrypt.compare(password, user.password)
                .then((doMatch) => {
                    if (doMatch) {
                        req.session.isLoggedIn = true;
                        req.session.user = user;
                        req.session.save(err => {
                            console.log(err)
                        })
                        response.push(['isPassword=>true'])
                        res.json(response);
                        res.end()
                    }
                    else {
                        response.push(['isPassword=>false'])
                        res.json(response)
                        res.end()

                    }
                }).catch((err) => {
                    console.log(err)
                });
        }).catch((err) => {
            console.log(err)
        });
}