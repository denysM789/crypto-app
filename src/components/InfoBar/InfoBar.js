import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Wrapper,
  InnerWrapper,
  SliderWrapper,
  Slider,
  Volume,
  PriceWrapper,
  BtcDominance,
  Icon,
  EthDominance,
} from "./InfoBar.styles";
import { NavText } from "fonts";
import BtcDom from "btcdom.svg";
import EthDom from "ethdom.svg";

const InfoBar = () => {
  const [marketData, setMarketData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getMarketData = async () => {
    try {
      const { data } = await axios("https://api.coingecko.com/api/v3/global");
      setMarketData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMarketData();
  }, []);

  return (
    <Wrapper>
      {isLoading && <div>loading</div>}
      {!isLoading && (
        <InnerWrapper>
          <NavText>Coins {marketData?.data.active_cryptocurrencies}</NavText>
          <NavText>Exchanges {marketData?.data.markets}</NavText>
          <NavText>
            $
            {Intl.NumberFormat("en-US", {
              notation: "compact",
              maximumFractionDigits: 1,
            }).format(marketData?.data.total_market_cap.usd)}
          </NavText>
          <Volume>
            <PriceWrapper>
              <NavText>
                $
                {Intl.NumberFormat("en-US", {
                  notation: "compact",
                  maximumFractionDigits: 1,
                }).format(marketData?.data.total_market_cap.btc)}
              </NavText>
              <SliderWrapper>
                <Slider
                  width={Math.round(
                    (marketData?.data.total_volume.usd /
                      marketData?.data.total_market_cap.usd) *
                      100
                  )}
                  background="#ffffff"
                ></Slider>
              </SliderWrapper>
            </PriceWrapper>
          </Volume>
          <BtcDominance>
            <Icon src={BtcDom} />
            <NavText>
              {Math.round(marketData?.data.market_cap_percentage.btc)}%
            </NavText>
            <SliderWrapper>
              <Slider
                width={Math.round(marketData?.data.market_cap_percentage.btc)}
                background="#ffffff"
              ></Slider>
            </SliderWrapper>
          </BtcDominance>
          <EthDominance>
            <Icon src={EthDom} />
            <NavText>
              {Math.round(marketData?.data.market_cap_percentage.eth)}%
            </NavText>
            <SliderWrapper>
              <Slider
                width={Math.round(marketData?.data.market_cap_percentage.eth)}
                background="#ffffff"
              ></Slider>
            </SliderWrapper>
          </EthDominance>
        </InnerWrapper>
      )}
    </Wrapper>
  );
};

export default InfoBar;
