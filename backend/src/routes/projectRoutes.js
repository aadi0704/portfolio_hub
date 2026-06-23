const express = require("express");
const { getProjects } = require("../controllers/projectController.js");

const router = express.Router();

router.get("/:categoryId", getProjects);

module.exports = router;