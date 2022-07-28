/* add customer route's controller */
const sequelize = require('./../../../config/db.connection');
const Sequelize = require("sequelize");
const bcryptjs = require('bcryptjs');
const Customer = require('./../../../models/customers')(sequelize, Sequelize);

/**
 * adding customers controller
 */
exports.getCustomer = (req, res, next) => {
    /* request data */
    Customer.findAll()
        .then((customers) => {
            // console.log(JSON.stringify(customers));
            /* sending response */
            res.setHeader('Content-Type', 'application/json');
            res.sendStatus = 200;
            res.send([customers]);
            res.end();
        })
        .catch((err) => {
            err.status = 500;
            next(err)
        });
};

/**
 * adding customers controller
 */
exports.addCustomer = (req, res, next) => {
    /* request data */
    // const first_name = req.body.first_name;
    // const last_name = req.body.last_name;
    // const email = req.body.email;

    /* saving customer data in database */
    // Customer.create(
    //     {
    //         first_name: first_name,
    //         last_name: last_name,
    //         email: email,
    //     }
    // );

    /* sending response */
    res.sendStatus = 201;
    res.end('customer added successfully...');
};

/**
 * updating customers controller
*/
exports.updateCustomer = (req, res, next) => {
    const id = req.params.id;
    const updateFirstName = req.body.first_name;
    const updateLastName = req.body.last_name;
    const updateEmail = req.body.email;
    const updatePhone = req.body.phone;
    Customer.update(
        {
            first_name: updateFirstName,
            last_name: updateLastName,
            email: updateEmail,
            phone_no: updatePhone,
        },
        {
            where: {
                id: id
            }
        }
    )
        .then((result) => {
            if (!result[0]) {
                const err = new Error("either no data changed or no customer found to be update!")
                err.httpStatusCode = 404;
                next(err)
            }
            else {
                res.json({ status: 200, message: 'customer updated successfully...' });
                res.end()
            }

        }).catch((err) => {
            err.status = 500;
            next(err)
        });
};

/**
 * Deleting customers controller
*/
exports.deleteCustomer = (req, res, next) => {
    const id = req.params.id;
    Customer.destroy({ where: { id: id } })
        .then((rowDeleted) => {
            if (rowDeleted == 1) {
                res.json({ status: 200, message: 'customer deleted successfully...' });
                res.end()
            }
            else {
                const err = new Error("no customer found to be delete!")
                err.status = 404;
                next(err)
            }
        }).catch((err) => {
            err.status = 500;
            next(err)
        });
};


