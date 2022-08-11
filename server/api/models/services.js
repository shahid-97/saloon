
'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./../../config/db.connection');
const SubServices = require('./sub_services');

class Services extends Model {
    static associate(models) { }
}
Services.init(
    {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        service_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        image_url: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    },
    {
        sequelize,
        tableName: 'services',
        timestamps: true,
        modelName: 'Services',
        
    }
);

// Services.hasMany(SubServices, {
//     foreignKey: 'service_id',
//     targetKey:'id'
// });

// SubServices.belongsTo(Services,{
//     foreignKey:'service_id',
//     targetKey:'id'

// });

module.exports = Services;