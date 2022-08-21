import InfoBar from "components/InfoBar/InfoBar";
import WatchlistCoin from "components/WatchlistCoin/WatchlistCoin";
import React, { useState } from "react";
import { ContentWrapper, InfoBarWrapper, Wrapper } from "./Watchlist.styles";

const Watchlist = ({ watchlist, setWatchlist }) => {
  console.log("from Watchlist", watchlist);
  return (
    <Wrapper>
      <ContentWrapper>
        <InfoBarWrapper>
          <InfoBar />
        </InfoBarWrapper>

        {watchlist.map((coin) => (
          <WatchlistCoin coin={coin} watchlist={watchlist} />
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Watchlist;
