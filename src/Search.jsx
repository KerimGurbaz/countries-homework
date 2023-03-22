import React from "react";

const Search = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search">
      <input type="text" placeholder="Ülke ara..." onChange={handleSearch} />
    </div>
  );
};

export default Search;
