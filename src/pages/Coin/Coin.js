import CoinInfo from "components/Coinpage/CoinInfo/CoinInfo";
import InfoBar from "components/InfoBar/InfoBar";
import { InfoBarWrapper, Wrapper } from "pages/CoinList/CoinList.styles";
import React, { useEffect } from "react";
import { ContentWrapper } from "./Coin.styles";

const Coin = (props) => {
  const coinId = props.match.params;

  return (
    <div>
      <Wrapper>
        <ContentWrapper>
          <InfoBarWrapper>
            <InfoBar />
          </InfoBarWrapper>
          <CoinInfo coinId={coinId} />
        </ContentWrapper>
      </Wrapper>
    </div>
  );
};

export default Coin;
