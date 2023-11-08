const IncomeSchema = require("../models/incomeModel")

exports.addIncome = async (req, res) => {
    const { title, amount, date, category, description, userId, type } = req.body
    console.log(req.body)

    const income = IncomeSchema({
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

        await income.save()

        res.status(200).json({ message: "Income save Successfully" })
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}


exports.getIncome = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 })
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}

exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    console.log(req.params)

    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({ message: "Income Deleted Successfully" })
        })
        .catch((error) => {
            res.status(500).json({ message: "Server Error" })
        })
}