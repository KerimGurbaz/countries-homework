import React, {useState} from "react";

import data from "./data/countries_data";
import './App.css';
import List from "./List";

function App() {

const [countries, setCountries] = useState(data)

  return (
    <div className="App">
      <div className="container">
         <h1 className="h1"> <span>Countries</span> </h1>
        <List countries={countries}/>

      </div>
    </div>
  );
}

export default App;
