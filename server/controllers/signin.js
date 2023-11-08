const UserSchema = require("../models/userModel.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function signinController(req, res) {
    let { email, password } = req.body
    UserSchema.find({ email: email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({ message: "User not found" })
            }
            bcrypt.compare(password, user[0].password, (err, result) => {
                if (!result) {
                    return res.status(401).json({ message: "Password not matched" })
                }
                if (result) {
                    const token = jwt.sign({ email: user[0].email }, process.env.JWT_PASS, { expiresIn: "24h" })
                    res.status(200).json({
                        userName: user[0].name,
                        userEmail: user[0].email,
                        userId: user[0].id,
                        token: token,
                        message:"Login Successfull"
                    },
                    )
                }
            })

            console.log(user)
        })
        .catch(err => {
            res.status(500).json({ message: "Server Error" })
        })
}

module.exports = signinController;