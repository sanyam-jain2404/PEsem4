import React, { useState } from "react";
import Form from "./components/Form";
import TransactionList from "./components/Transaction-list";
import { sum } from "./components/Utils";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }

  function deleteTransaction(id) {
    setTransactions(
      transactions.filter((t) => t.id !== id)
    );
  }

  const totals = sum(transactions);

  return (
    <div>
      <h2>Expense Tracker</h2>

      <h3>Income: {totals.income}</h3>
      <h3>Expense: {totals.expense}</h3>

      <Form addTransaction={addTransaction} />

      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;