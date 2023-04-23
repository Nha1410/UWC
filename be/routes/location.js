const express = require("express");
const router = express.Router();
const LocationController = require("../app/controllers/LocationController");

router.post("/store", LocationController.store);
router.get("/fetch", LocationController.fetch);

module.exports = router;