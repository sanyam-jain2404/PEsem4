import React from "react";
import TransactionItem from "./Transaction-item";

function TransactionList(props) {
  return (
    <ul>
      {props.transactions.map((t) => (
        <TransactionItem
          key={t.id}
          transaction={t}
          deleteTransaction={props.deleteTransaction}
        />
      ))}
    </ul>
  );
}

export default TransactionList;