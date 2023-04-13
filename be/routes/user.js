const express = require("express");
const router = express.Router();
const UserRestController = require("../app/controllers/UserRestController");

router.get("/testt", UserRestController.test);

module.exports = router;
