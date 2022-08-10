"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("./../../config/db.connection");
const Services = require("./services");
class Sub_services extends Model {
  static associate(models) {}
}
Sub_services.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    sub_service_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING(255),
    },
  },
  {
    sequelize,
    tableName: "sub_services",
    timestamps: false,
    modelName: "Sub_services",
  }
);

module.exports = Sub_services;
