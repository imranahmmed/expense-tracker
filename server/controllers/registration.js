const UserSchema = require("../models/userModel.js")
const bcrypt = require("bcrypt")
const saltRounds = 10;

async function registionController(req, res) {
    let { name, email, password } = req.body

    bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) {
            res.status(500).json({ message: "Server Error" })
        } else {
            let user = UserSchema({
                name: name,
                email: email,
                password: hash
            })

            try {
                if (!name || !email || !password) {
                    return res.status(400).json({ message: "All fields are required" })
                }

                if (password.length <= 8) {
                    return res.status(400).json({ message: "Password must be minimum 8 character " })
                }
                user.save()

                res.status(200).json({
                    user,
                    message: "Registration Successfully"
                })
            } catch (error) {
                res.status(500).json({ message: "Server Error" })
            }
        }
    });
}

module.exports = registionController