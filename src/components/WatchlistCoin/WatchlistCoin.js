import {
  IconBackground,
  IconWrapper,
} from "components/Portfolio/Modal/Modal.styles";
import React from "react";
import {
  ContentWrapper,
  Wrapper,
  RowsWrapper,
  UpperRowWrapper,
  LowerRowWrapper,
} from "./WatchlistCoin.styles";

const WatchlistCoin = ({ watchlist, coin }) => {
  console.log(coin);
  return (
    <Wrapper>
      <ContentWrapper>
        <IconWrapper>
          <IconBackground>
            <img src={coin.image} />
          </IconBackground>
        </IconWrapper>
        <RowsWrapper>
          <UpperRowWrapper>{coin.name}</UpperRowWrapper>
          <LowerRowWrapper></LowerRowWrapper>
        </RowsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default WatchlistCoin;
