function Table({ transactions }) {
    const data = transactions.map((one, i) => {
      return (
        <tr key={i+ 1}>
          <td>{one.Date}</td>
          <td>{one.Description}</td>
          <td>{one.Category}</td>
          <td>{one.Amount}</td>
        </tr>
      );
    });
  
    return (<>{data}</>);
  }
  
  export default Table;