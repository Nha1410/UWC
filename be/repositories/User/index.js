const db = require("../../models");
const hash = require("bcryptjs");

module.exports = {
  async create(userInfo) {
    try {
      const user = await db.User.create({
        ...userInfo,
      });
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  },
  async findById(id) {
    try {
      const user = await db.User.findOne({
        where: {
          id: id,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  },
  async findByEmail(email) {
    try {
      const user = await db.User.findOne({
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
};
