const express = require("express");
const router = express.Router();
const UserRestController = require("../app/controllers/UserRestController");
const multer = require("multer");
const upload = multer({ dest: process.cwd() + "/public/avatars" });

router.get("/testt", UserRestController.test);
router.post("/register", upload.single("file"), UserRestController.register);
router.post("/login", UserRestController.login);
router.get("/info/:id", UserRestController.getInfoUser);
router.post("/logout", UserRestController.logOut);
router.get("/users-by-role", UserRestController.getUserByRole);
router.get("/all", UserRestController.getAllUsers);

module.exports = router;
