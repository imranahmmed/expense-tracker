const express = require('express');
const router = express.Router();
const authRoutes = require("./auth.js")
const transctionsRoutes = require("./transection.js")

router.use("/auth", authRoutes)
router.use("/trancection", transctionsRoutes)

module.exports = router