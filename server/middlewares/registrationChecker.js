function registrationCheck(req, res, next) {
    if (req.headers.authorization == 1234) {
        next()
    } else {
        res.send({ error: "Authorization Failed" })
    }
}

module.exports = registrationCheck