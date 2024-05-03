import React, { useState } from "react";

function DateInput({ value, onChange }) {
  return (
    <div className="col-3">
      <input type="date" name="Date" value={value} onChange={onChange} />
    </div>
  );
}
function DescriptionInput({ value, onChange }) {
  return (
    <div className="col-3">
      <input
        type="text"
        name="Description"
        placeholder="Description"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
function CategoryInput({ value, onChange }) {
  return (
    <div className="col-3">
      <input
        type="text"
        name="Category"
        placeholder="Category"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
function AmountInput({ value, onChange }) {
  return (
    <div className="col-3">
      <input
        type="text"
        name="Amount"
        placeholder="Amount"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

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
    <div className="row">
      <DateInput value={newTransaction.Date} onChange={handleInputChange} />
      <DescriptionInput
        value={newTransaction.Description}
        onChange={handleInputChange}
      />
      <CategoryInput
        value={newTransaction.Category}
        onChange={handleInputChange}
      />
      <AmountInput
        value={newTransaction.Amount}
        onChange={handleInputChange}
      />
      <div className="col-12">
        <button onClick={handleAddTransaction}>Add Transaction</button>
      </div>
    </div>
  );
}

export default Form;
