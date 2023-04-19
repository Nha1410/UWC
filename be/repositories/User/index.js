const db = require("../../models");
const hash = require("bcryptjs");

module.exports = {
  async create(userInfo) {
    try {
      const user = await db.User.create({
        ...userInfo,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async findById(id, scope = "defaultScope") {
    try {
      const user = await db.User.scope(scope).findOne({
        where: {
          id: id,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  },
  async findByEmail(email, scope = "defaultScope") {
    try {
      const user = await db.User.scope(scope).findOne({
        where: {
          email,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  },
  async findByRefreshToken(token) {
    try {
      const user = await db.User.findOne({
        where: {
          refreshToken,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  },
  async findByRole(roleCode, limit, scope = "defaultScope") {
    try {
      const params = limit
        ? {
            where: {
              role: roleCode,
            },
            limit,
          }
        : {
            where: {
              role: roleCode,
            },
          };
      const users = await db.User.scope(scope).findAll(params);
      return users;
    } catch (error) {}
  },
  async findAllUsers() {
    try {
      const users = await db.User.scope("sensitive").findAll();
      return users;
    } catch (error) {
      console.log(Error);
    }
  },
};
