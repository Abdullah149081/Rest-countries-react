import "./App.css";
import Countries from "./component/Countries/Countries";

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
/* 
function LoadCountries() {
  let number = 1;
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
      {countries.map((country) => (
        <Country name={country.name.common}></Country>
      ))}
    </div>
  );
}

function Country(props) {
  return (
    <div>
      <h2>Country Name :{props.name}</h2>
    </div>
  );
}
 */
export default App;
