import { ChartSubText } from "components/Coinpage/CoinInfo/CoinInfo.styles";
import React from "react";

import {
  NoAssetText,
  NoAssetWrapper,
  OutsideWrapper,
  Title,
  Wrapper,
} from "./AssetInfo.styles";

const AssetInfo = () => {
  const noAssets = true;

  return (
    <OutsideWrapper>
      <Wrapper>
        {noAssets && (
          <NoAssetWrapper>
            <NoAssetText>No Assets Yet :-(</NoAssetText>
          </NoAssetWrapper>
        )}

        {!noAssets && (
          <Title>
            <ChartSubText>Your Statistics</ChartSubText>
          </Title>
        )}
      </Wrapper>
    </OutsideWrapper>
  );
};

export default AssetInfo;
