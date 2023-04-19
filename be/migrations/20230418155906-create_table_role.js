"use strict";
const db = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Roles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
      },
      code: {
        type: Sequelize.DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await db.Role.create({
      name: "Back Officer",
      code: 1,
    });
    await db.Role.create({
      name: "Collector",
      code: 2,
    });
    await db.Role.create({
      name: "Janitor",
      code: 3,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Roles");
  },
};
