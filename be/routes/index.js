const userRoute = require("./user");
const taskRoute = require("./task");
const locationRoute = require("./location");

module.exports = (app) => {
  app.use("/api/user", userRoute);
  app.use("/api/task", taskRoute);
  app.use("/api/location", locationRoute);
};
