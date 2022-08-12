import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  OutsideWrapper,
  HeaderRow,
  Wrapper,
  ChangeSpan,
  TokenSpan,
  Icon,
  THNum,
  THName,
  THPrice,
  TH1h,
  TH24h,
  TH7d,
  TH24VolMarCap,
  THCircTotSup,
  THLast7d,
  TableRowsWrapper,
  Styled24VMarketCapTextWrapper,
  DoubleSpan,
  SliderWrapper,
  Slider,
} from "./CoinOverview.styles";
import "./styles.css";
import Sparkline from "components/Sparkline/Sparkline";
import { UpArrow, DownArrow } from "styles/Arrows";
import {
  CoinTableTitle,
  CoinTableRowText,
  CoinTableRowTextShrink,
} from "styles/Fonts";

import {
  addCommas,
  addCommasWithDecimals,
  formatLargeNumber,
  formatPercentage,
} from "../../utils";
import { CurrencyContext } from "index";
import { getAllCoins } from "store/coinOverview/actions";
import { useSelector, useDispatch } from "react-redux";
import SkeletonCard from "components/SkeletonUI/SkeletonCard/SkeletonCard";
import SkeletonTitle from "components/SkeletonUI/SkeletonTitle/SkeletonTitle";

const CoinOverview = () => {
  const { coinsData: coins, isLoading } = useSelector(
    (state) => state.coinOverview
  );

  const { currency } = React.useContext(CurrencyContext);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currency?.abbr) {
      dispatch(getAllCoins(currency?.abbr));
    }
  }, [currency?.abbr]);

  const isWorking = coins && !isLoading;

  return (
    <OutsideWrapper>
      <h3>Your Overview</h3>

      <Wrapper>
        {isWorking && (
          <HeaderRow>
            <tr>
              <THNum>
                <CoinTableTitle>#</CoinTableTitle>
              </THNum>
              <THName>
                <CoinTableTitle>Name</CoinTableTitle>
              </THName>
              <THPrice>
                <CoinTableTitle>Price</CoinTableTitle>
              </THPrice>
              <TH1h>
                <CoinTableTitle>1h%</CoinTableTitle>
              </TH1h>
              <TH24h>
                <CoinTableTitle>24h%</CoinTableTitle>
              </TH24h>
              <TH7d>
                <CoinTableTitle>7d%</CoinTableTitle>
              </TH7d>
              <TH24VolMarCap>
                <CoinTableTitle>24h Volume/Market Cap</CoinTableTitle>
              </TH24VolMarCap>
              <THCircTotSup>
                <CoinTableTitle>Circulating/Total Supply</CoinTableTitle>
              </THCircTotSup>
              <THLast7d>
                <CoinTableTitle>Last 7d</CoinTableTitle>
              </THLast7d>
            </tr>
          </HeaderRow>
        )}
        {isLoading && <SkeletonTitle />}
        {isLoading && <SkeletonCard />}
        {!isLoading && (
          <TableRowsWrapper>
            {coins.map((coin, index) => (
              <tr>
                <td>
                  <CoinTableRowText>{index + 1}</CoinTableRowText>
                </td>
                <td>
                  <TokenSpan>
                    <Icon src={coin.image} alt="Coin-Image" />
                    <Link to={`/coin/${coin.id}`}>
                      <CoinTableRowText>
                        {coin.name} ({coin.symbol.toUpperCase()})
                      </CoinTableRowText>
                    </Link>
                  </TokenSpan>
                </td>

                <td>
                  <CoinTableRowText>
                    {currency?.symbol}
                    {coin.current_price < 10
                      ? addCommasWithDecimals(coin.current_price)
                      : addCommas(coin.current_price)}
                  </CoinTableRowText>
                </td>
                <td>
                  <ChangeSpan>
                    {coin.price_change_percentage_1h_in_currency > 0 ? (
                      <UpArrow />
                    ) : (
                      <DownArrow />
                    )}
                    <CoinTableRowText>
                      {formatPercentage(
                        coin.price_change_percentage_1h_in_currency
                      )}
                    </CoinTableRowText>
                  </ChangeSpan>
                </td>
                <td>
                  <ChangeSpan>
                    {coin.price_change_percentage_24h > 0 ? (
                      <UpArrow />
                    ) : (
                      <DownArrow />
                    )}
                    <CoinTableRowText>
                      {formatPercentage(coin.price_change_percentage_24h)}
                    </CoinTableRowText>
                  </ChangeSpan>
                </td>
                <td>
                  <ChangeSpan>
                    {coin.price_change_percentage_7d_in_currency > 0 ? (
                      <UpArrow />
                    ) : (
                      <DownArrow />
                    )}
                    <CoinTableRowText>
                      {formatPercentage(
                        coin.price_change_percentage_7d_in_currency
                      )}
                    </CoinTableRowText>
                  </ChangeSpan>
                </td>
                <td>
                  <DoubleSpan>
                    <Styled24VMarketCapTextWrapper
                      width={(coin.total_volume / coin.market_cap) * 100}
                      background={"white"}
                    >
                      <CoinTableRowTextShrink>
                        {currency.symbol}
                        {formatLargeNumber(coin.total_volume)}
                      </CoinTableRowTextShrink>

                      <CoinTableRowTextShrink>
                        {currency.symbol}
                        {formatLargeNumber(coin.market_cap)}
                      </CoinTableRowTextShrink>
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
                      <CoinTableRowTextShrink>
                        {currency.symbol}
                        {formatLargeNumber(coin.circulating_supply)}
                      </CoinTableRowTextShrink>

                      <CoinTableRowTextShrink>
                        {currency.symbol}
                        {formatLargeNumber(coin.total_supply)}
                      </CoinTableRowTextShrink>
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
          </TableRowsWrapper>
        )}
      </Wrapper>
    </OutsideWrapper>
  );
};

export default CoinOverview;
