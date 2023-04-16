// server.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes");
const db = require("./models");
const userService = require("./services/User");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const credentials = require("./config/credentials");

const app = express();
const port = process.env.PORT;
app.use(credentials);
// Cross Origin Resource Sharing
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

try {
  db.sequelize.authenticate();
  console.log("connect MySQL success");
} catch (error) {
  console.log(error);
}
route(app);
// userService.createNewUser({
//   firstName: "Vuong",
//   lastName: "Nguyen",
//   phone: "0329721147",
//   email: "vanvuong24072001@gmail.com",
//   password: "12345678",
// });

app.listen(port, function () {
  console.log(`App listening at http://localhost:${port}`);
});
