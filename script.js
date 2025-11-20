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
incomeForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const amount = Number(incomeAmount.value)
    if(amount <= 0) return
    
    incomeEntries.push(amount)
    incomeAmount.value = ""

    renderIncome()
    updateSummary()
})

expenseForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const description = expenseDescription.value.trim()
    const amount = Number(expenseAmount)
    if(!description || amount <= 0) return

    expenseEntries.push({description, amount})

    expenseDescription.value = ""
    expenseAmount.value = ""

    renderExpenses()
    updateSummary()
})

// functions
function renderIncome() {
    incomeList.innerHTML = ""

    incomeEntries.forEach((amount) => {
        const li = document.createElement("li")
        li.textContent = `$${amount}`
        incomeList.appendChild(li)
    })
}

function renderExpenses() {
    
}

function updateSummary() {

}