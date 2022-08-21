import React from "react";
import { AnimatePresence } from "framer-motion";
import CoinOverview from "components/CoinOverview/CoinOverview";
import BarChart from "components/BarChart/BarChart";
import LineChart from "components/LineChart/LineChart";
import {
  Wrapper,
  ChartWrapper,
  CoinListWrapper,
  InfoBarWrapper,
  ContentWrapper,
} from "./CoinList.styles";
import InfoBar from "components/InfoBar/InfoBar";
const CoinList = ({
  watchCoin,
  setWatchCoin,
  watchlist,
  setWatchlist,
  handleWatchlistClick,
}) => {
  {
    return (
      <AnimatePresence>
        <Wrapper
          initial={{ opacity: 0, height: "auto" }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0 }}
        >
          <ContentWrapper>
            <InfoBarWrapper>
              <InfoBar />
            </InfoBarWrapper>
            <ChartWrapper>
              <LineChart />
              <BarChart />
            </ChartWrapper>
            <CoinListWrapper>
              <CoinOverview
                watchCoin={watchCoin}
                setWatchCoin={setWatchCoin}
                watchlist={watchlist}
                setWatchlist={setWatchlist}
                handleWatchlistClick={handleWatchlistClick}
              />
            </CoinListWrapper>
          </ContentWrapper>
        </Wrapper>
      </AnimatePresence>
    );
  }
};

export default CoinList;
