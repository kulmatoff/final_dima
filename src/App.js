import { use, useEffect, useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Heading } from "./components/Heading";
import { Accordion } from "./components/Accordion";
import { Tooltip } from "./components/Tooltip";

function App() {
  const [loading, setLoading] = useState(true);
  const [currency, updateCurrency] = useState([]);
  const [searchValue, updateSearchBar] = useState("");

  const getSearch = (e) => {
    const searchTerm = e.target.value ;
    updateSearchBar(searchTerm)
  }

  const fetchData = () => {
    setLoading(true)
    const response = fetch("https://api.coinlore.net/api/tickers/")
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        updateCurrency(d)
      })
      .finally(() => {
        setLoading(false)
      })
  };

  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <div className="App">
      <Heading size="2">Cryptocurrency Prices</Heading>
      <Button onClick={fetchData} variant="secondary">
        Update
      </Button>
      <Input label="Search" placeholder="Bitcoin" onChange=""></Input>
      {loading ? "Loading" : currency.data.map((props) => {
        return <Accordion title={props.name}>
          <p><b>Symbol: </b>{props.symbol}<br></br>
          <b>Price USD: </b>{props.price_usd}<br></br>
          <b>Price BTC: </b>{props.price_btc}<br></br>
          <b><Tooltip text="The market capitalization of a cryptocurrency
          is calculated by multiplying the number of coins in circulation by the current price" position="top">Market Cap USD: </Tooltip></b>{props.market_cap_usd}<br></br>
          <b>Percent Change 24H: </b><span className={parseFloat(props.percent_change_24h) > 0 ? "percent_increase" : "percent_decrease"}>{parseFloat(props.percent_change_24h)}%</span>
          </p>
        </Accordion>;
      })}
    </div>
  );
}

export default App;
