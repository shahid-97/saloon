const _ = require('lodash');

const { encryptPassword } = require('../../utils/shared');
const {
    Admin,
    User,
    Customers,
    Vendors,
    Service,
    SubService,
    ServiceOrders,
    VendorsReviews,
    CustomersReviews,
    Notifications
} = require('../../models/index');


module.exports = {
   
    getOrders
   
}

// ORDERS CRUD
function getOrders() {
    return new Promise((resolve, reject) => {
        ServiceOrders.findAll({include: [{model:Customers}, {model:Vendors}], limit:10})
            .then(orders => resolve(orders))
            .catch(err => reject(err));
    });
}
