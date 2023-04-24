const userRoute = require("./user");
const taskRoute = require("./task");
const vehicleRoute = require("./vehicle");

module.exports = (app) => {
  app.use("/api/user", userRoute);
  app.use("/api/task", taskRoute);
  app.use("/api/vehicle", vehicleRoute);
};
