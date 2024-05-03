import React, { useState } from "react";

function SearchInput({ onChange }) {
  return (
    <input
      onChange={onChange}
      className="form-control"
      type="text"
      placeholder="Search Transactions"
    />
  );
}

function Search({ list, setTransactions }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const data = e.target.value.trim();
    setSearchQuery(data);
  };
  const filteredTransactions = list.filter((t) =>
    t.Description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    setTransactions(searchQuery.length > 0 ? filteredTransactions : list);
  };

  return (
    <div className="mb-3">
      <SearchInput onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
