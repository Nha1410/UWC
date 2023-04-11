// server.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes");
const db = require("./config/db");

const app = express();
const port = process.env.PORT;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.connect();
route(app);

app.listen(port, function () {
  console.log(`App listening at http://localhost:${port}`);
});
