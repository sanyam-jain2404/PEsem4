import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const parts = input.split(" ");

    const text = parts[0];
    const amount = Number(parts[1]);

    const newTransaction = {
      id: Date.now(),
      text: text,
      amount: amount
    };

    props.addTransaction(newTransaction);

    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Example: Food -200"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;