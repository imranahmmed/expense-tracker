const express = require('express');
const router = express.Router();
const baseUrl = process.env.BASE_URL
const apiRoutes = require("./api")

router.use(baseUrl, apiRoutes)

module.exports = router