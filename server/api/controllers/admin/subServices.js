/* @Controller category */
const sequelize = require('./../../../config/db.connection');
const Sequelize = require('sequelize');
const Service = require('./../../models/services');
const SubService = require('./../../models/sub_services');
const Service2 = require('./../../../models/services')(sequelize, Sequelize);
const SubService2 = require('./../../../models/sub_services')(sequelize, Sequelize);

/**
 * @action getSubService()
 * 
 * @description to get all getSubService
 */
exports.getSubService = (req, res, next) => {
    const id = req.params.id;
    (SubService.findAll({ where: { service_id: id } })
        .then((subservices) => {
            if (!subservices.length) {
                const err = new Error("no subservices found!")
                err.httpStatusCode = 404;
                next(err)
            }
            else if (subservices) {
                res.send(subservices)
                res.end()
            }


        }).catch((err) => {
            err.status = 500;
            next(err)
        }))
}
/**
 * @action postSubService()
 * 
 * @description add postSubService
 */
exports.postSubService = (req, res, next) => {
console.log(req.body)
    const sub_service_name = req.body.sub_service_name;
    const service_id = req.body.service_id;
    const service_name = req.body.service_name;
    SubService.create({
        sub_service_name: sub_service_name,
        service_id: service_id,
    })
        .then((result) => {
            res.json({ status: 201, message: 'record added successfully...' });
            res.end()
        }).catch((err) => {
            err.status = 500;
            next(err)
        });

}
/**
 * @action updateSubService()
 * 
 * @description update updateSubService
 */
exports.updateSubService = (req, res, next) => {
    const updateSubServiceName = req.body.sub_service_name;
    const id = req.params.id;
    SubService2.update(
        {
            sub_service_name: updateSubServiceName,
        },
        {
            where: {
                id: id
            }
        }
    ).then((result) => {
        if (!result[0]) {
            const err = new Error("either no data changed or no sub service found to be update!")
            err.httpStatusCode = 404;
            next(err)
        }
        else {
            res.json({ status: 201, message: 'sub service updated successfully...' });
            res.end()
        }
    }).catch((err) => {
        err.status = 500;
        next(err)
    });
};
/**
 * @action deleteSubService()
 * 
 * @description delete specific deleteSubService
 */
exports.deleteSubService = (req, res, next) => {
    const id = req.params.id;
    SubService2.destroy({ where: { id: id } })
        .then((rowDeleted) => {
            if (rowDeleted == 1) {
                res.json({ status: 200, message: 'subservice deleted successfully...' });
                res.end()
            }
            else {
                const err = new Error("no subservice found to be delete!")
                err.httpStatusCode = 404;
                next(err)
            }
        }).catch((err) => {
            err.status = 500;
            next(err)
        });
}

/**
 * @action deleteAllcategorys()
 * 
 * @description delete all categorys
 */
exports.deleteAllCategory = (req, res, next) => {
    // const id = req.params.id;
    // Category.destroy({
    //     truncate: true

    // }).then((result) => {
    //     console.log('all categorys deleted...')
    //     res.send('all category deleted...')
    //     res.end()
    // }).catch((err) => {
    //     console.log(err)
    // });
}
