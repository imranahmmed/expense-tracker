const InitialBalanceSchema = require("../models/initialBalanceModel");

exports.addInitialBalance = async (req, res) => {
    const { title, amount, category, userId } = req.body
    const initialBalance = InitialBalanceSchema({
        title,
        amount,
        category,
        userId
    })

    try {
        if (!title || !amount || !category || !userId) {
            return res.status(400).json({ message: "All fields are required" })
        }
        if (amount <= 0 || !amount === "number") {
            return res.status(400).json({ message: "Amount must be a positive number" })
        }

        await initialBalance.save()
        res.status(200).json({ message: "Initial Balance save Successfully" })

    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}
