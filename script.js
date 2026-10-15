"use strict";

const calculateButton = document.querySelector("#calculate-button");
const results = document.querySelector("#results");
const resultMessage = document.querySelector("#result-message");
const amountFormatter = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 2
});

function getAmountFromPrompt(message) {
  while (true) {
    const input = window.prompt(message);

    if (input === null) {
      return null;
    }

    const amount = Number(input.trim());
    if (input.trim() !== "" && Number.isFinite(amount) && amount >= 0) {
      return amount;
    }

    window.alert("Please enter a valid amount of zero or more.");
  }
}

function calculateRemainingBalance(budget, expenses) {
  return budget - expenses;
}

function displayResults(budget, expenses, remainingBalance) {
  const isOverBudget = remainingBalance < 0;
  const balanceLabel = isOverBudget ? "Amount over budget" : "Remaining balance";

  resultMessage.textContent =
    `Monthly budget: ${amountFormatter.format(budget)} | ` +
    `Total expenses: ${amountFormatter.format(expenses)} | ` +
    `${balanceLabel}: ${amountFormatter.format(Math.abs(remainingBalance))}`;
  results.classList.toggle("over-budget", isOverBudget);
  results.classList.toggle("has-result", !isOverBudget);

  console.log("SpendWise budget summary");
  console.log(`Monthly budget: ${amountFormatter.format(budget)}`);
  console.log(`Total expenses: ${amountFormatter.format(expenses)}`);
  console.log(`${balanceLabel}: ${amountFormatter.format(Math.abs(remainingBalance))}`);
}

function runBudgetCheck() {
  const monthlyBudget = getAmountFromPrompt("What is your monthly budget?");
  if (monthlyBudget === null) {
    return;
  }

  const totalExpenses = getAmountFromPrompt("What are your total expenses for the month?");
  if (totalExpenses === null) {
    return;
  }

  const remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);
  displayResults(monthlyBudget, totalExpenses, remainingBalance);
}

calculateButton.addEventListener("click", runBudgetCheck);
