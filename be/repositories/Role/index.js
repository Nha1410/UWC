const db = require("../../models");

module.exports = {
  async getNameByCode(code) {
    try {
      const role = await db.Role.findOne({
        where: {
          code,
        },
      });
      return role.name;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
