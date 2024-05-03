const Search = ({ setTransactions, list }) => {
    const handleChange = (e) => {
      const data = e.target.value.trim();
      setTransactions(
        data.length > 0
          ? list.filter((t) =>
              t.Description.toLowerCase().includes(data.toLowerCase())
            )
          : list
      );
    };
  
    return (
      <div className="mb-3">
        <input
          onChange={handleChange}
          className="form-control"
          type="text"
          placeholder="Search Transactions"
        />
      </div>
    );
  };
  
  export default Search;