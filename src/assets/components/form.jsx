import React, { useState } from "react";

function Form({ transactions, setTransactions }) {
  const [newTransaction, setNewTransaction] = useState({
    Date: "",
    Description: "",
    Category: "",
    Amount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewTransaction({
      ...newTransaction,
      [name]: value,
    });
  };

  const handleAddTransaction = () => {
    if (
      newTransaction.Date &&
      newTransaction.Description &&
      newTransaction.Category &&
      newTransaction.Amount
    ) {
      setTransactions([...transactions, newTransaction]);

      setNewTransaction({
        Date: "",
        Description: "",
        Category: "",
        Amount: "",
      });
    }
  };

  return (
    <div className="row border">
      <div className="col-3">
        <input
          type="date"
          name="Date"
          value={newTransaction.Date}
          onChange={handleInputChange}
        />
      </div>{" "}
      <div className="col-3">
        <input
          type="text"
          name="Description"
          placeholder="Description"
          value={newTransaction.Description}
          onChange={handleInputChange}
        />
      </div>{" "}
      <div className="col-3">
        <input
          type="text"
          name="Category"
          placeholder="Category"
          value={newTransaction.Category}
          onChange={handleInputChange}
        />
      </div>{" "}
      <div className="col-3">
        <input
          type="text"
          name="Amount"
          placeholder="Amount"
          value={newTransaction.Amount}
          onChange={handleInputChange}
        />
      </div>{""}
      <div className="col-12">
        <button onClick={handleAddTransaction}>Add Transaction</button>
      </div>
    </div>
  );
}

export default Form;