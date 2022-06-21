import React from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import Coin from "components/Coin/Coin";
import {
  CoinLogo,
  StyledContainer,
  StyledTHead,
  StyledTable,
  Styled24VMarketCapTextWrapper,
  DoubleSpan,
  SliderWrapper,
  Slider,
} from "./CoinOverview.styles";
import "./styles.css";
import Sparkline from "components/Sparkline/Sparkline";

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
              {list.map((coin, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td className="flex pl-2 pr-4">
                    <img
                      className="object-scale-down h-8 w-8 pr-3 pb-2"
                      src={coin.image}
                      alt=""
                    />{" "}
                    {coin.name} ({coin.symbol.toUpperCase()})
                  </td>
                  <td>
                    {Math.round(
                      coin.price_change_percentage_1h_in_currency
                    ).toFixed(2)}
                  </td>
                  <td>
                    {Math.round(coin.price_change_percentage_24h).toFixed(2)}
                  </td>
                  <td>
                    {Math.round(
                      coin.price_change_percentage_7d_in_currency
                    ).toFixed(2)}
                  </td>
                  <td>
                    <DoubleSpan>
                      <Styled24VMarketCapTextWrapper
                        width={(coin.total_volume / coin.market_cap) * 100}
                        background={"white"}
                      >
                        <p>
                          $
                          {Intl.NumberFormat("en-US", {
                            notation: "compact",
                            maximumFractionDigits: 1,
                          }).format(coin.total_volume)}
                        </p>

                        <p>
                          $
                          {Intl.NumberFormat("en-US", {
                            notation: "compact",
                            maximumFractionDigits: 1,
                          }).format(coin.market_cap)}
                        </p>
                      </Styled24VMarketCapTextWrapper>
                      <SliderWrapper
                        height="8px"
                        width="100%"
                        background="#2172e5"
                      >
                        <Slider
                          width={(coin.total_volume / coin.market_cap) * 100}
                          background="white"
                        ></Slider>
                      </SliderWrapper>
                    </DoubleSpan>
                  </td>
                  <td>
                    <DoubleSpan height="8px" width="100%" background="#2172e5">
                      <Styled24VMarketCapTextWrapper
                        width={(coin.total_volume / coin.market_cap) * 100}
                        background={"white"}
                      >
                        <p>
                          $
                          {Intl.NumberFormat("en-US", {
                            notation: "compact",
                            maximumFractionDigits: 1,
                          }).format(coin.circulating_supply)}
                        </p>

                        <p>
                          $
                          {Intl.NumberFormat("en-US", {
                            notation: "compact",
                            maximumFractionDigits: 1,
                          }).format(coin.total_supply)}
                        </p>
                      </Styled24VMarketCapTextWrapper>
                      <SliderWrapper
                        height="8px"
                        width="100%"
                        background="#2172e5"
                      >
                        <Slider
                          width={
                            (coin.circulating_supply / coin.total_supply) * 100
                          }
                          background="white"
                        ></Slider>
                      </SliderWrapper>
                    </DoubleSpan>
                  </td>
                  <td>
                    <Sparkline
                      data={coin.sparkline_in_7d}
                      last7d={coin.price_change_percentage_7d_in_currency}
                    ></Sparkline>
                  </td>
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
