import React from "react";

const List = ({ countries }) => {
  return (
    <div className="countries">
      {countries.map((country) => {
        return (
          <div className="country">
            <h2>{country.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default List;
