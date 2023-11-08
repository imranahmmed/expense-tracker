const ExpenseSchema = require("../models/expenseModel")

exports.addExpense = async (req, res) => {
    const { title, amount, date, category, description, userId, type } = req.body

    const expense = ExpenseSchema({
        title: title,
        amount: amount,
        category: category,
        description: description,
        date: date,
        userId: userId,
        type: type
    })

    try {
        if (!title || !category || !amount || !description || !date || !userId || !type) {
            return res.status(400).json({ message: "All fields are required" })
        }

        if (amount <= 0 || !amount === "number") {
            return res.status(400).json({ message: "Amount must be a positive number" })
        }

        await expense.save()
        res.status(200).json({ message: "Expence save Successfully" })
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}


exports.getExpense = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({ createdAt: -1 })
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    console.log(req.params)

    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json({ message: "Expense Deleted Successfully" })
        })
        .catch((error) => {
            res.status(500).json({ message: "Server Error" })
        })
}