const express = require("express");
const { getDSAData} =require("../controllers/dsaControllers");

const router = express.Router();

router.get("/", getDSAData);

module.exports = router;