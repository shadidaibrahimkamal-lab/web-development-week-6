# SpendWise

SpendWise is a simple monthly budget planner. Enter a monthly budget and your total expenses to see the remaining balance (or how much you are over budget). The result is shown on the page and clearly labeled in the browser console.

The page includes example monthly expenses such as groceries, transport, and toiletries. Their amounts are illustrative only and are not automatically added to the total you enter.

## JavaScript concepts

- **Variables and data types:** `monthlyBudget`, `totalExpenses`, and `remainingBalance` store numeric budget data. The input helper also uses strings for prompt responses, while `null` represents a cancelled prompt.
- **User input:** Clicking **Calculate my balance** uses JavaScript `prompt()` dialogs to collect the budget and expense total. Invalid, blank, or negative values are rejected and requested again; cancelling either prompt stops the calculation.
- **Calculations:** The remaining balance is the monthly budget minus total expenses. A negative result is presented as the amount over budget.
- **Functions:** `getAmountFromPrompt()` validates user input, `calculateRemainingBalance()` performs the calculation, `displayResults()` updates the page and console, and `runBudgetCheck()` coordinates the process.
- **Events and output:** An event listener runs the budget check when the button is clicked. Results are displayed in the page and the browser developer console.

## Run the project

Open `index.html` in a modern web browser. Click **Calculate my balance**, enter the requested amounts, then open the browser developer console to see the labeled summary.
