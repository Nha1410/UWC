const userRepo = require("../../repositories/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  async isUserExist(email) {
    return userRepo.findByEmail(email);
  },
  async createNewUser(userInfo) {
    //encrypt the password
    const hashedPassword = await bcrypt.hash(userInfo.password, 10);

    //create and store the new user
    const user = await userRepo.create({
      ...userInfo,
      password: hashedPassword,
    });
    return user;
  },
  async findUserByEmail(email) {
    return userRepo.findByEmail(email);
  },
  async genrateRefreshToken(foundUser, cookies) {
    // const roles = Object.values(foundUser.roles).filter(Boolean);
    // create JWTs
    const accessToken = jwt.sign(
      {
        UserInfo: {
          ...foundUser,
          // roles: roles,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10s" },
    );

    const newRefreshToken = jwt.sign({ id: foundUser.id }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "15s",
    });

    if (cookies?.jwt) {
      res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    }

    foundUser.refreshToken = newRefreshToken;
    await foundUser.update({
      refreshToken: newRefreshToken,
    });
    await foundUser.save();
    return { newRefreshToken, accessToken };
  },
  async getInfomationOfUser(id) {
    try {
      const user = userRepo.findById(id);
      return user;
    } catch (error) {
      console.log(error);
    }
  },
};
