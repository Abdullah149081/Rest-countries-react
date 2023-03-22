import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  //  Step:1
  const [countries, setCountries] = useState([]);
  console.log("line 8:", countries);
  //   Step:2
  useEffect(() => {
    // Step:3
    const URL = "https://restcountries.com/v3.1/all";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Welcome To World Country Name</h1>
      <h2 style={{ color: "tomato", fontWeight: "bold" }}>Total Country: {countries.length}</h2>

      <div className="d-grid">
        {countries.map((country) => (
          <Country name={country.name.common} population={country.population} area={country.area}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
