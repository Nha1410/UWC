// server.js
require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT;
const cors = require('cors');
var db = require('./config/db');

db();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});