const express = require("express");
const router = express.Router();
const UserRestController = require("../app/controllers/UserRestController");

router.get("/test", UserRestController.test);

module.exports = router;
