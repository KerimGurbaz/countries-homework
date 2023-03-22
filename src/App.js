import React, { useState } from "react";
import data from "./data/countries_data";
import "./App.css";
import List from "./List";
import Search from "./Search";

function App() {
  const [countries, setCountries] = useState(data);

  const handleSearch = (searchTerm) => {
    const filteredCountries = data.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCountries(filteredCountries);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Countries</h1>
        <Search onSearch={handleSearch} />
        <List countries={countries} />
      </div>
    </div>
  );
}

export default App;
