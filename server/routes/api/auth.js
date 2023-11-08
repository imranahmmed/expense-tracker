const express = require('express')
const router = express.Router()

const registrationCheck = require('../../middlewares/registrationChecker.js')
const registionController = require('../../controllers/registration.js')
const signinController = require('../../controllers/signin.js')


router.post("/registration", registionController)
router.post("/signin", signinController)

module.exports = router