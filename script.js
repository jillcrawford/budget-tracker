// DOM elements
// income
const incomeForm = document.getElementById("income-form")
const incomeAmount = document.getElementById("income-amount")
const incomeList = document.getElementById("income-list")

// expenses
const expenseForm = document.getElementById("expense-form")
const expenseDescription = document.getElementById("expense-description")
const expenseAmount = document.getElementById("expense-amount")
const expenseList = document.getElementById("expense-list")

// totals
const totalIncome = document.getElementById("total-income")
const totalExpenses = document.getElementById("total-expenses")
const remainingBalance = document.getElementById("remaining-balance")

// storage arrays
let incomeArray = []
let expenseArray = []

// event listeners