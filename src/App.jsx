import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  // step:1
  const [countries, setCountries] = useState([]);
  // step:2
  useEffect(() => {
    // step:3
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
      <h1>Visiting Every Country</h1>
      <h2>Available Country :{countries.length}</h2>
    </div>
  );
}

export default App;
