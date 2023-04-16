"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
        unique: true,
      },
      refreshToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        afterFind: (result) => {
          if (Array.isArray(result)) {
            for (const elem of result) {
              delete elem.dataValues.password;
              delete elem.dataValues.refreshToken;
            }
          } else {
            delete result.dataValues.password;
            delete result.dataValues.refreshToken;
          }
          return result;
        },
      },
    },
  );
  return User;
};
