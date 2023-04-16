const express = require("express");
const router = express.Router();
const UserRestController = require("../app/controllers/UserRestController");

router.get("/testt", UserRestController.test);
router.post("/register", UserRestController.register);
router.post("/login", UserRestController.login);

module.exports = router;
