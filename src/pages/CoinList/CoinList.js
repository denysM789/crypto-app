import React from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import CoinOverview from "components/CoinOverview/CoinOverview";
import BarChart from "components/BarChart/BarChart";
import LineChart from "components/LineChart/LineChart";
import { Wrapper, ChartWrapper, CoinListWrapper } from "./CoinList.styles"

class CoinList extends React.Component {
  render() {
    return (
      <Wrapper>
           <ChartWrapper>
           <LineChart/>
           <BarChart/>
           </ChartWrapper>
           
           <CoinListWrapper>
           <CoinOverview />
           </CoinListWrapper>
        
      </Wrapper>
    );
  }
}

export default CoinList;
