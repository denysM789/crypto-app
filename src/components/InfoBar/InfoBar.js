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
import { useSelector, useDispatch } from "react-redux";
import { getMarketData } from "store/infoBar/actions";

const InfoBar = () => {
  const { data: marketData, isLoading } = useSelector((state) => state.infoBar);
  const dispatch = useDispatch();

  const hasMarketData = Object.keys(marketData.data).length !== 0;
  const hasData = hasMarketData && !isLoading;

  useEffect(() => {
    dispatch(getMarketData());
  }, []);

  return (
    <Wrapper>
      {isLoading && <div>loading</div>}
      {hasData && (
        <InnerWrapper>
          <NavText>Coins {marketData.data.active_cryptocurrencies}</NavText>
          <NavText>Exchanges {marketData?.data.markets}</NavText>
          <NavText>
            $
            {Intl.NumberFormat("en-US", {
              notation: "compact",
              maximumFractionDigits: 1,
            }).format(marketData.data.total_market_cap.usd)}
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
