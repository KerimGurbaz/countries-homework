import React, { useState } from "react";

const List = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="countries">
      {countries.map((country) => {
        return (
          <div
            key={country.name}
            className="country"
            onClick={() => handleCountryClick(country)}
          >
            <h2>{country.name}</h2>
            <div
              className="flag"
              style={{ backgroundImage: `url(${country.flag})` }}
            ></div>
          </div>
        );
      })}

      {selectedCountry && (
        <div className="country-details">
          <h2>{selectedCountry.name}</h2>
          <p>Capital: {selectedCountry.capital}</p>
          <p>Population: {selectedCountry.population}</p>
          {/* diğer özellikler */}
        </div>
      )}
    </div>
  );
};

export default List;
