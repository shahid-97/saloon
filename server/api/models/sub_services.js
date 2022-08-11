"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("./../../config/db.connection");
const Services = require("./services");
class SubServices extends Model {
  static associate(models) {}
}
SubServices.init(
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
    modelName: "SubServices",
  }
);

module.exports = SubServices;
