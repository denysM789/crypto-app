import BottomChart from "components/Coinpage/BottomChart/BottomChart";
import CoinInfo from "components/Coinpage/CoinInfo/CoinInfo";
import CurrencyConverter from "components/Coinpage/CurrencyConverter/CurrencyConverter";
import InfoBar from "components/InfoBar/InfoBar";
import { InfoBarWrapper, Wrapper } from "pages/CoinList/CoinList.styles";
import React, { useEffect, useState } from "react";
import { ContentWrapper } from "./Coin.styles";

const Coin = (props) => {
  const coinId = props.match.params;
  const [duration, setDuration] = useState(365);
  const [durations, setDurations] = useState([
    {
      length: "1d",
      duration: 1,
      isActive: false,
    },
    {
      length: "7d",
      duration: 7,
      isActive: false,
    },
    {
      length: "30d",
      duration: 30,
      isActive: false,
    },
    {
      length: "90d",
      duration: 90,
      isActive: false,
    },
    {
      length: "1y",
      duration: 365,
      isActive: true,
    },
    {
      length: "Max",
      duration: 1000,
      isActive: false,
    },
  ]);

  const handleDurationsClick = (duration) => {
    const newDurationsArr = durations.map((dur) => {
      return {
        ...dur,
        isActive: dur.duration === duration.duration,
      };
    });
    {
      setDurations(newDurationsArr);
      setDuration(duration.duration);
    }
  };

  return (
    <div>
      <Wrapper>
        <ContentWrapper>
          <InfoBarWrapper>
            <InfoBar />
          </InfoBarWrapper>
          <CoinInfo
            coinId={coinId}
            durations={durations}
            onClick={handleDurationsClick}
          />
        </ContentWrapper>
        <CurrencyConverter coinId={coinId} />
        <BottomChart
          coinId={coinId}
          durations={durations}
          activeDuration={duration}
        />
      </Wrapper>
    </div>
  );
};

export default Coin;
