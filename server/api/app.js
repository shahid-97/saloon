const express = require('express');
const app = express();
const authRoute = require('./routes/admin/auth');
const getCustomerRoute = require('./routes/admin/customer');
const getServiceRoute = require('./routes/admin/category');
const getSubServiceRoute = require('./routes/admin/subServices')
const sequelize = require('./../config/db.connection');
const Sequelize = require("sequelize");
const AdminModel = require('./../models/admin')(sequelize, Sequelize);
const bcrypt = require('bcryptjs');



/* database sync */
// sequelize.sync().then((result) => {
/* adding admin default */
AdminModel.findOne({ where: { email: 'admin@admin.com', id: 1 } })
    .then((admin) => {
        if (!admin) {
            const saltRounds = 12;
            const myPlaintextPassword = 'admin123$%^';
            bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
                AdminModel.create({
                    first_name: 'Admin',
                    last_name: 'admin',
                    email: 'admin@admin.com',
                    password: hash,
                }).then((result) => {
                    console.log("admin created...")

                }).catch((err) => {
                    console.log(err)
                });
            });

        }

    }).catch((err) => {
        console.log(err)
    });
// }).catch((err) => {
//     console.log(err)
// });


/* auth route */
app.use('/admin', authRoute);

/* customers route */
app.use('/admin', getCustomerRoute)

/* service route */
app.use('/admin', getServiceRoute)

/* subservice route */
app.use('/admin', getSubServiceRoute)

module.exports = app;