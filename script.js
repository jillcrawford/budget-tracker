// DOM elements
// income
const incomeForm = document.getElementById("income-form")
const incomeDescription = document.getElementById("income-description")
const incomeAmount = document.getElementById("income-amount")

// expenses
const expenseForm = document.getElementById("expense-form")
const expenseDescription = document.getElementById("expense-description")
const expenseAmount = document.getElementById("expense-amount")

// totals
const totalIncome = document.getElementById("total-income")
const totalExpenses = document.getElementById("total-expenses")
const remainingBalance = document.getElementById("remaining-balance")

// storage arrays
let incomeArray = []
let expenseArray = []
let entries = []

// event listeners

// income
incomeForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const description = incomeDescription.value.trim()    
    const amount = Number(incomeAmount.value)
    if(!description || amount <= 0) return
    
    incomeArray.push({description, amount})
    entries.push({type: "Income", description, amount})
    incomeDescription.value = ""
    incomeAmount.value = ""

    renderTable()
    updateSummary()
})

// expenses
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const description = expenseDescription.value.trim()
    const amount = Number(expenseAmount.value)
    if(!description || amount <= 0) return

    expenseArray.push({description, amount})
    entries.push({type: "Expense", description, amount})
    expenseDescription.value = ""
    expenseAmount.value = ""

    renderTable()
    updateSummary()
})

// functions
function renderTable() {
    const tbody = document.getElementById("table-body")
    tbody.innerHTML = ""

    entries.forEach((entry, index) => {
        const row = document.createElement("tr")

        // description
        const descrText = document.createElement("td")
        descrText.textContent = entry.description

        // amount
        const amountText = document.createElement("td")
        amountText.textContent = entry.amount

        if (entry.type == "Income") {
            amountText.style.color = "green"
            amountText.textContent = `+$${entry.amount}`
        } else {
            amountText.style.color = "red"
            amountText.textContent = `-$${entry.amount}`
        }

        //row.appendChild(typeText)
        row.appendChild(descrText)
        row.appendChild(amountText)

        tbody.appendChild(row)
    })
}

function updateSummary() {
    let totalIncome = 0
    let totalExpenses = 0

    for (let item of incomeArray) {
        totalIncome += item.amount
    }

    for (let item of expenseArray) {
        totalExpenses += item.amount
    }

    document.getElementById("total-income").textContent = totalIncome
    document.getElementById("total-expenses").textContent = totalExpenses
    document.getElementById("remaining-balance").textContent = totalIncome - totalExpenses
}