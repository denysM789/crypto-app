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
class CoinList extends React.Component {
  render() {
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
              <CoinOverview />
            </CoinListWrapper>
          </ContentWrapper>
        </Wrapper>
      </AnimatePresence>
    );
  }
}

export default CoinList;
