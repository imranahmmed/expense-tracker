const express = require("express");
const { addIncome, getIncome, deleteIncome } = require("../../controllers/income");
const { addExpense, getExpense, deleteExpense } = require("../../controllers/expence");
const { addInitialBalance } = require("../../controllers/initialBalance")
const authCheck = require("../../middlewares/authChecker");
const { calculateFinalBalance } = require("../../controllers/balance");
const router = express.Router()

router.post("/add-initial-balance", authCheck, addInitialBalance)

router.post("/add-income", addIncome)
router.get("/get-income", authCheck, getIncome)
router.delete("/delete-income/:id", authCheck, deleteIncome)


router.post("/add-expense", addExpense)
router.get("/get-expense", authCheck, getExpense)
router.delete("/delete-expense/:id", authCheck, deleteExpense)

router.get("/get-balance/:userId", calculateFinalBalance)
module.exports = router

