module.exports = {
  // test rest controller
  async test(req, res) {
    res.send("success");
  },

  // [POST] register a user
  async register(req, res) {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).send({ user });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  // [POST] logina user
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findByCredentials(email, password);
      if (!user) return res.status(401).send("Login failed! Check authentication credentials");
      const token = user.generateAuthToken();
      res.send({ user, token });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
