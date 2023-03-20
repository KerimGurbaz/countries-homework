import React, {useState} from "react";

import data from "./data/countries_data";
import './App.css';
import List from "./List";

function App() {
const [countries, setCountries] = useState(data)


  return (
    <div className="App">
      <div className="container">
        <h1>Countries</h1>
        <List countries={countries}/>

        {console.log(countries[0])}

      </div>
    </div>
  );
}

export default App;
