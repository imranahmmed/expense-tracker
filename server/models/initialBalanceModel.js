const mongoose = require("mongoose");
const { Schema } = mongoose

const InitialBalanceSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 20,
    },

    category: {
        type: String,
        required: true,
        trim: true,
    },
    userId: {
        type: String,
        required: true,
        trim: true,
    }

}, { timestamps: true })

module.exports = mongoose.model("InitialBalance", InitialBalanceSchema)