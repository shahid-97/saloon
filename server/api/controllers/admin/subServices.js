/* @Controller category */
const sequelize = require('./../../../config/db.connection');
const Sequelize = require('sequelize');
const SubService = require('./../../../models/sub_services')(sequelize, Sequelize);
const Service = require('./../../../models/services')(sequelize, Sequelize);

/**
 * @action getCategory()
 * 
 * @description to get all category
 */
exports.getSubService = (req, res, next) => {
    const id = req.params.id;
    (SubService.findAll({ where: { service_id: id } })
        .then((subservices) => {
            if (!subservices.length) {
                res.json("no data found against the parameter")
            }
            else if (subservices) {

                res.json(subservices)
            }


        }).catch((err) => {
            console.log(err)
        }))
}
/**
 * @action addCategory()
 * 
 * @description add category
 */
exports.addCategory = (req, res, next) => {
    // const data = req.body ?? [];
    // console.log('category data...')
    // const category_name = data['category_name'] ?? '';
    // const image_url = data['image_url'] ?? '';
    // const description = data['description'] ?? '';

    // Category.create({
    //     category_name: category_name,
    //     image_url: image_url,
    //     description: description,
    // })
    //     .then((result) => {
    //         console.log('created category...')
    //         res.send('category created...')
    //         res.end()
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     });
}
/**
 * @action updateCategory()
 * 
 * @description update category
 */
exports.updateCategory = (req, res, next) => {
    // const data = req.body ?? [];
    // const id = req.params.id ?? '';
    // const category_name = data['category_name'] ?? '';
    // const image_url = data['image_url'] ?? '';
    // const description = data['description'] ?? '';

    // Category.update(
    //     {
    //         category_name: category_name,
    //         image_url: image_url,
    //         description: description
    //     },
    //     {
    //         where: {
    //             id: id
    //         }
    //     }
    // ).then((result) => {
    //     console.log('update successfully...')
    //     res.send(result)
    //     res.end()
    // }).catch((err) => {
    //     console.log(err)
    // });
};
/**
 * @action deletecategory()
 * 
 * @description delete specific category
 */
exports.deleteCategory = (req, res, next) => {
    // const id = req.params.id;
    // Category.destroy({
    //     where: {
    //         id: id
    //     }
    // }).then((result) => {
    //     console.log('deleted...')
    //     res.send('deleted...')
    //     res.end()
    // }).catch((err) => {
    //     console.log(err)
    // });
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
