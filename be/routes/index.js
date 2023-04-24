const userRoute = require("./user");
const taskRoute = require("./task");
const vehicleRoute = require("./vehicle");
const locationRoute = require("./location");

module.exports = (app) => {
  app.use("/api/user", userRoute);
  app.use("/api/task", taskRoute);
  app.use("/api/vehicle", vehicleRoute);
  app.use("/api/location", locationRoute);
};
