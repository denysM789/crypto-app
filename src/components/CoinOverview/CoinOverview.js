import React from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import Coin from "components/Coin/Coin";
import {
  CoinLogo,
  StyledContainer,
  StyledTHead,
  StyledTable,
} from "./CoinOverview.styles";
import "./styles.css";

class CoinOverview extends React.Component {
  state = {
    list: [],
    isLoading: false,
  };

  getAllCoins = async () => {
    try {
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
      );
      this.setState({ list: data });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getAllCoins();
  }

  render() {
    const list = this.state.list;
    const values = Object.values(list);

    return (
      <div className="p-8">
        <h3>Your Overview</h3>
        <StyledContainer>
          <StyledTable>
            <StyledTHead>
              <tr className="space-x-4">
                <th>#</th>
                <th>Name</th>
                <th>1h%</th>
                <th>24h%</th>
                <th>7d%</th>
                <th>24h Volume/Market Cap</th>
                <th>Circulating/Total Supply</th>
                <th>Last 7d</th>
              </tr>
            </StyledTHead>
            <tbody className="space-x-4">
              {list.slice(0, 20).map((obj, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td className="flex pl-2 pr-4">
                    <img
                      className="object-scale-down h-8 w-8 pr-3 pb-2"
                      src={obj.image}
                      alt=""
                    />{" "}
                    {obj.name} ({obj.symbol.toUpperCase()})
                  </td>
                  <td>
                    {Math.round(
                      obj.price_change_percentage_1h_in_currency
                    ).toFixed(2)}
                  </td>
                  <td>
                    {Math.round(obj.price_change_percentage_24h).toFixed(2)}
                  </td>
                  <td>
                    {Math.round(
                      obj.price_change_percentage_7d_in_currency
                    ).toFixed(2)}
                  </td>
                  <td>Test 1</td>
                  <td>Test 2</td>
                  <td>Test 3</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </StyledContainer>
      </div>
    );
  }
}

export default CoinOverview;

{
  /*

<div>
            <h1>Your Overview</h1>
           <ol>
               {this.state.list
               .slice(0, 20)
               .map((coin) => (<div><li>{coin.name}</li></div>))}
           </ol>
           
            </div>
*/
}
