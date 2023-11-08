const IncomeSchema = require("../models/incomeModel")
const ExpenseSchema = require("../models/expenseModel")
const InitialBalanceSchema = require("../models/initialBalanceModel");


calculateFinalBalance = async (req, res) => {
  const { userId } = req.params;

  // Find the user's initial balance
  const balance = await InitialBalanceSchema.findOne({ userId: userId });

  // Find all of the user's expenses and calculate the total
  const expenses = await ExpenseSchema.find({ userId: userId });

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  // Find all of the user's incomes and calculate the total
  const incomes = await IncomeSchema.find({ userId: userId });
  const totalIncomes = incomes.reduce((total, income) => total + income.amount, 0);

  // Calculate the final balance by subtracting the total expenses and adding the total incomes to the initial balance
  const finalBalance = balance.amount - totalExpenses + totalIncomes;

  // Update the user's balance with the final balance
  await InitialBalanceSchema.findOneAndUpdate({ userId: userId }, { amount: finalBalance });

  // Return the final balance
  return res.json(finalBalance);

}

// Export the function for use in other modules

module.exports = { calculateFinalBalance };