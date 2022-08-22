import { ChartSubText } from "components/Coinpage/CoinInfo/CoinInfo.styles";
import React from "react";
import {
  AssetsInnerWrapper,
  AssetWrapper,
  ChangeSpan,
  Icon,
  ImageBackground,
  ImageOuterWrapper,
  LowerRowWrapper,
  NoAssetText,
  NoAssetWrapper,
  OuterWrapper,
  OutsideWrapper,
  RowsWrapper,
  Title,
  UpperRowWrapper,
  Wrapper,
} from "./AssetInfo.styles";
import Sparkline from "components/Sparkline/Sparkline";
import { addCommasWithDecimals, formatPercentage } from "utils";
import { UpArrow, DownArrow } from "styles/Arrows";
import { CurrencyContext } from "index";
import { CoinTableRowText } from "styles/Fonts";

const AssetInfo = ({ assets, purchasePrice }) => {
  const noAssets = assets.length === 0;

  const { currency } = React.useContext(CurrencyContext);

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
        {!noAssets && (
          <OuterWrapper>
            {assets?.map((asset) => (
              <AssetWrapper>
                <AssetsInnerWrapper>
                  <ImageOuterWrapper>
                    <ImageBackground>
                      <Icon src={asset.coin.image} />
                      <div>
                        {asset.coin.name}({asset.coin.symbol.toUpperCase()})
                      </div>
                    </ImageBackground>
                  </ImageOuterWrapper>
                  <RowsWrapper>
                    <span>Market Price:</span>
                    <UpperRowWrapper>
                      <ChangeSpan>
                        <CoinTableRowText>
                          Current Price: {currency?.symbol}
                          {addCommasWithDecimals(asset.coin.current_price)}
                        </CoinTableRowText>
                      </ChangeSpan>
                      <ChangeSpan>
                        1h:{" "}
                        <CoinTableRowText>
                          {formatPercentage(
                            asset.coin.price_change_percentage_1h_in_currency
                          )}
                        </CoinTableRowText>
                        {asset.coin.price_change_percentage_1h_in_currency >
                        0 ? (
                          <UpArrow />
                        ) : (
                          <DownArrow />
                        )}
                      </ChangeSpan>
                      <ChangeSpan>
                        24h:{" "}
                        <CoinTableRowText>
                          {formatPercentage(
                            asset.coin.price_change_percentage_24h_in_currency
                          )}
                        </CoinTableRowText>
                        {asset.coin.price_change_percentage_24h_in_currency >
                        0 ? (
                          <UpArrow />
                        ) : (
                          <DownArrow />
                        )}
                      </ChangeSpan>
                      <ChangeSpan>
                        7d:{" "}
                        <CoinTableRowText>
                          {formatPercentage(
                            asset.coin.price_change_percentage_7d_in_currency
                          )}
                        </CoinTableRowText>
                        {asset.coin.price_change_percentage_7d_in_currency >
                        0 ? (
                          <UpArrow />
                        ) : (
                          <DownArrow />
                        )}
                      </ChangeSpan>
                      Last 7d:
                      <Sparkline
                        data={asset.coin.sparkline_in_7d}
                        last7d={
                          asset.coin.price_change_percentage_7d_in_currency
                        }
                      ></Sparkline>
                    </UpperRowWrapper>
                    <span>Your Asset:</span>
                    <LowerRowWrapper>
                      <ChangeSpan>
                        <CoinTableRowText>
                          Coin Amount: {asset.amount}
                        </CoinTableRowText>
                      </ChangeSpan>
                      <ChangeSpan>
                        <CoinTableRowText>
                          Total Value: {currency?.symbol}
                          {addCommasWithDecimals(
                            asset.amount * asset.coin.current_price
                          )}
                        </CoinTableRowText>
                      </ChangeSpan>
                      <ChangeSpan>
                        <CoinTableRowText>
                          Price change since purchase: {currency?.symbol}
                          {addCommasWithDecimals(
                            asset.amount * purchasePrice -
                              asset.amount * asset.coin.current_price
                          )}
                        </CoinTableRowText>
                        {purchasePrice > asset.coin.current_price ? (
                          <UpArrow />
                        ) : (
                          <DownArrow />
                        )}
                      </ChangeSpan>
                      <ChangeSpan>
                        <CoinTableRowText>
                          Purchase Date: {asset.date}
                        </CoinTableRowText>
                      </ChangeSpan>
                    </LowerRowWrapper>
                  </RowsWrapper>
                </AssetsInnerWrapper>
              </AssetWrapper>
            ))}
          </OuterWrapper>
        )}
      </Wrapper>
    </OutsideWrapper>
  );
};

export default AssetInfo;
