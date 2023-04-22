const express = require("express");
const router = express.Router();
const TaskManagementController = require("../app/controllers/TaskManagementController");

router.get("/test", TaskManagementController.test);
router.post("/store", TaskManagementController.store);
router.get("/fetch", TaskManagementController.fetch);

module.exports = router;
