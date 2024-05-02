function TransTable({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((information, index) => (
          <tr key={index}>
            <td>{information.Date}</td>
            <td>{information.Description}</td>
            <td>{information.Category}</td>
            <td>{information.Amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransTable;
