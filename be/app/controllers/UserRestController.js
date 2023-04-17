const bcrypt = require("bcryptjs");
const userService = require("../../services/User");

module.exports = {
  // test rest controller
  async test(req, res) {
    res.send("success");
  },

  // [POST] register a user
  async register(req, res) {
    const { password, firstName, lastName, phone, email } = req.body;

    if (!email || !password) return res.status(400).json({ message: "Username and password are required." });

    // check for duplicate usernames in the db
    // const duplicate = await User.findOne({ username: user }).exec();
    const duplicate = await userService.isUserExist(email);
    if (duplicate) return res.sendStatus(409); //Conflict

    try {
      //create and store the new user
      const user = await userService.createNewUser({
        email,
        firstName,
        lastName,
        phone,
        password,
      });
      console.log(user);

      res.status(201).json({ success: `New user created!` });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  },

  // [POST] login a user
  async login(req, res) {
    const cookies = req.cookies;
    console.log(req.body);
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) return res.status(400).json({ message: "Username and password are required." });

    const foundUser = await userService.findUserByEmail(email);
    console.log("sdkjflsjdfjslkdf", foundUser.password);
    if (!foundUser) return res.sendStatus(401); //Unauthorized

    // evaluate password
    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
      const serviceRefreshToken = await userService.genrateRefreshToken(foundUser);
      // Creates Secure Cookie with refresh token
      res.cookie("jwt", serviceRefreshToken.newRefreshToken, {
        secure: true,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000,
      });

      // Send authorization roles and access token to user
      res.json({ accessToken: serviceRefreshToken.accessToken, email: email });
    } else {
      res.sendStatus(401);
    }
  },

  // [GET] get infomation of user
  async getInfoUser(req, res) {
    const userId = req.params.id;
    console.log("sdfsdsdf");
    if (!userId) res.status(400).json({ message: "id is required" });
    const user = await userService.getInfomationOfUser(userId);
    return res.json(user);
  },

  // [GET] logout user
  async logOut(req, res) {
    const { id, jwt } = req.body;

    if (!jwt) return res.sendStatus(204); //No content

    const user = userService.deleteRefreshTokenOfUser(id);
    if (user) {
      res.clearCookie("jwt", { sameSite: "None", secure: true });
      return res.sendStatus(204);
    } else {
      res.status(400).json({ message: "User not exist" });
    }
  },
};
