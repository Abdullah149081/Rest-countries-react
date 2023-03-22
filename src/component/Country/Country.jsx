import React from "react";
import "./Country.css";

const Country = (props) => {
  return (
    <div className="country-details">
      <h2> Country Name: {props.name}</h2>
      <p> Population: {props.population}</p>
      <p> Area: {props.population}</p>
    </div>
  );
};

export default Country;
