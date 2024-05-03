import React from "react";
function TableRow({ transaction }) {
  return (
    <tr>
      <td>{transaction.Date}</td>
      <td>{transaction.Description}</td>
      <td>{transaction.Category}</td>
      <td>{transaction.Amount}</td>
    </tr>
  );
}

function Table({ transactions }) {
  const rows = transactions.map((transaction, index) => (
    <TableRow key={index} transaction={transaction} />
  ));

  return <tbody>{rows}</tbody>;
}

export default Table;
