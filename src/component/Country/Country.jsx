import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, capital, population, area, flags } = props.country;
  // console.log(props.country);
  return (
    <div className="country-details">
      <img className="img-country" src={flags.png} alt={flags.png} />
      <h2> Country Name: {name.common}</h2>
      <p> Capital: {capital}</p>
      <p> Population: {population}</p>
      <p> Area: {area}</p>
    </div>
  );
};

export default Country;
