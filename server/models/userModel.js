const mongoose = require("mongoose")
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String
}, { timestamps: true })

module.exports = mongoose.model("Users", UserSchema)