const roleRepo = require("../../repositories/Role");

module.exports = {
  async getNameRoleByCode(code) {
    try {
      const roleName = await roleRepo.getNameByCode(code);
      return roleName;
    } catch (error) {
      console.log(error);
    }
  },
};
