const jwt = require("jsonwebtoken")


function authCheck(req, res, next) {
    try {
        const token = req.headers.authorization;
        console.log(token)
        const verify = jwt.verify(token, process.env.JWT_PASS)
        console.log(verify)
        next()
    } catch (error) {
        res.status(400).json({ message: "Authorization failed" })
    }
}

module.exports = authCheck