import React from "react";

function TransactionItem(props) {
  return (
    <li>
      {props.transaction.text} : {props.transaction.amount}
      <button onClick={() => props.deleteTransaction(props.transaction.id)}>
        Delete
      </button>
    </li>
  );
}

export default TransactionItem;