export function sum(transactions) {
  let income = 0;
  let expense = 0;

  transactions.forEach((t) => {
    if (t.amount > 0) {
      income += t.amount;
    } else {
      expense += Math.abs(t.amount);
    }
  });

  return { income, expense };
}