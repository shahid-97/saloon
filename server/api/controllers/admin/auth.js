const Sequelize = require("sequelize");
const bcrypt = require('bcrypt')
const sequelize = require('../../../config/db.connection');
const jwt = require("jsonwebtoken");
const AdminModel = require('../../../models/admin')(sequelize, Sequelize);

/**
 * @action postLogin()
 * 
 * @description log in function
 */
exports.postLogin = (req, res, next) => {
    console.log('logging in ...');
    const TOKEN_SECRET = 'somesupersecretsecret';
    const email = req.body.email;
    const password = req.body.password;
    AdminModel.findOne({ where: { email: email } })
        .then((user) => {
            if (!user) {
                //no user
                const error = new Error('A admin with this email could not be found.');
                error.status = 401;
                next(error)
            } else {
                bcrypt.compare(password, user.password)
                    .then((doMatch) => {
                        if (doMatch) {
                            req.session.isLoggedIn = true;
                            req.session.user = user;
                            req.session.save((err) => {
                                if (err) {
                                    console.log(err)
                                }
                            })
                            const token = jwt.sign(
                                {
                                    email: user.email,
                                    userId: user.id
                                },
                                TOKEN_SECRET,
                                { expiresIn: '1h' }
                            );
                            res.status(200).json({ token: token, userId: user.id });
                        }
                        else {

                            const error = new Error('Wrong password!');
                            error.status = 401;
                            next(error)
                        }
                    }).catch((err) => {
                        console.log(err)
                        if (!err.status) {
                            err.status = 500;
                        }
                        next(err);
                    });
            }

        }).catch((err) => {
            console.log(err)
            if (!err.status) {
                err.status = 500;
            }
            next(err);
        });
}

