const mongoose = require("mongoose");
const { Schema } = mongoose

const ExpenseSchema = new Schema({
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
    date: {
        type: Date,
        required: true,
        trim: true,
        dateFormat: "dd/mm/yyy",
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    userId: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Expense", ExpenseSchema)