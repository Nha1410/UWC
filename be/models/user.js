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
        get() {
          return () => this.getDataValue("password");
        },
      },
      phone: {
        type: DataTypes.STRING,
        unique: true,
      },
      refreshToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
      },
      timePerMonth: {
        type: DataTypes.INTEGER,
      },
      currentMCP: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      role: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "User",
      scopes: {
        sensitive: {
          attributes: { exclude: ["password", "refreshToken"] },
        },
      },
    },
  );

  return User;
};
