import axios from "axios";

import React, { useEffect, useState } from "react";
import {
  DescriptionInnerWrapper,
  DescriptionWrapper,
  OutsideWrapper,
  DescriptionText,
  Title,
  BookIcon,
  Wrapper,
  SummaryContentWrapper,
  IconBackground,
  ChartSubText,
  ChartCategoryText,
  ChartHeaderText,
  PriceWrapper,
  PercentWrapper,
  PriceText,
  ProfitWrapper,
  PriceRangeWrapper,
  PriceRangeDetailsWrapper,
  PriceRangeTextWrapper,
  ATPriceWrapper,
  PortfolioEntryText,
  PortfolioEntryLabelText,
  CoinId,
  IdOuterWrapper,
  IdInnerWrapper,
  CoinName,
  PortfolioEntryTitle,
  PriceDetailsInnerWrapper,
  PriceDetails,
  MarketDetails,
  MarketDetailsInnerWrapper,
  MarketDetailsTop,
  MarketDetailsLine,
  BulletPoint,
  MarketDetailsLineText,
  MarketDetailsMiddle,
  MarketDetailsBottom,
  DoubleSpanTop,
  DoubleSpan,
  LinkWrapper,
  LinkInnerWrapper,
  LinkIconWrapper,
  LinkDomainWrapper,
  ClipboardIconWrapper,
  LinkIcon,
  LinkDomain,
  BottomLinkWrapper,
  BottomLinksWrapper,
  BottomLinksInnerWrapper,
  BottomLinkInnerWrapper,
  BottomChartWrapper,
  ToolTipSpan,
  OuterWrapper,
} from "./CoinInfo.styles";
import { CurrencyContext } from "index";
import { addCommas, formatPercentage } from "../../../utils";
import { UpArrow, DownArrow } from "styles/Arrows";

import Link from "linkicon.svg";
import Book from "book.svg";
import {
  Slider,
  SliderWrapper,
} from "components/CoinOverview/CoinOverview.styles";

import { CoinTableRowText } from "styles/Fonts";
import ClipboardButton from "./ClipboardButton/ClipboardButton";
import DurationSelector from "../DurationSelector/DurationSelector";
import { getCoinInfo } from "store/coinInfo/actions";
import { useSelector, useDispatch } from "react-redux";
import { SkeletonCard } from "../../SkeletonUI/SkeletonCard";

const CoinInfo = (props) => {
  const { currency } = React.useContext(CurrencyContext);

  const { coinData: coin, isLoading } = useSelector((state) => state.coinInfo);

  const marketData = useSelector(
    (state) => state.coinInfo.coinData.market_data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinInfo(props.coinId));
  }, []);

  const url = coin?.links?.homepage[0];

  const [, url2, url3, url4] = coin?.links?.blockchain_site || [];

  const coinHasData = Object.keys(coin).length !== 0;
  const hasData = coinHasData && !isLoading;

  return (
    <div>
      {isLoading && <div>is Loading</div>}
      {hasData && (
        <OutsideWrapper>
          <Wrapper>
            <Title>
              <ChartSubText>Your Summary:</ChartSubText>
            </Title>
            <SummaryContentWrapper>
              <CoinId>
                <IdOuterWrapper>
                  <IdInnerWrapper>
                    <IconBackground>
                      <img src={coin.image.small} />
                    </IconBackground>
                    <CoinName>
                      <PortfolioEntryTitle></PortfolioEntryTitle>
                      {coin?.name} ({coin?.symbol.toUpperCase()})
                    </CoinName>
                  </IdInnerWrapper>
                </IdOuterWrapper>
                <LinkWrapper>
                  <LinkInnerWrapper>
                    <LinkIconWrapper>
                      <LinkDomain
                        href={coin?.links.homepage[0]}
                        target="_blank"
                      >
                        <LinkIcon src={Link} alt="LinkIcon" />
                      </LinkDomain>
                    </LinkIconWrapper>
                    <LinkDomainWrapper>
                      <LinkDomain
                        href={coin?.links.homepage[0]}
                        target="_blank"
                      >
                        {coin?.links.homepage[0].replace(/(^\w+:|^)\/\//, "")}
                      </LinkDomain>
                    </LinkDomainWrapper>
                    <ClipboardIconWrapper>
                      <ClipboardButton text={url} />
                    </ClipboardIconWrapper>
                  </LinkInnerWrapper>
                </LinkWrapper>
              </CoinId>
              <PriceDetails>
                <PriceDetailsInnerWrapper>
                  <PriceWrapper>
                    <ChartHeaderText>
                      {currency?.symbol +
                        addCommas(marketData?.current_price[currency.abbr])}
                    </ChartHeaderText>
                    <PercentWrapper>
                      {marketData?.price_change_percentage_24h >= 0 ? (
                        <UpArrow />
                      ) : (
                        <DownArrow />
                      )}
                      <PriceText
                        price={marketData?.price_change_percentage_24h}
                      >
                        {formatPercentage(
                          marketData?.price_change_percentage_24h
                        )}
                      </PriceText>
                    </PercentWrapper>
                  </PriceWrapper>
                  <ProfitWrapper>
                    <ChartCategoryText>Profit:</ChartCategoryText>
                    <PriceText></PriceText>
                  </ProfitWrapper>
                  <BookIcon src={Book} alt="BookIcon" />
                  <PriceRangeDetailsWrapper>
                    <PriceRangeWrapper>
                      <UpArrow />
                      <PriceRangeTextWrapper>
                        <ATPriceWrapper>
                          <PortfolioEntryLabelText>
                            All time High:{" "}
                          </PortfolioEntryLabelText>
                          <PortfolioEntryText>
                            {currency?.symbol + addCommas(marketData?.ath.usd)}
                          </PortfolioEntryText>
                        </ATPriceWrapper>
                        <span>
                          <PortfolioEntryText>
                            {new Date(
                              marketData?.ath_date.usd
                            ).toLocaleString()}
                          </PortfolioEntryText>
                        </span>
                      </PriceRangeTextWrapper>
                    </PriceRangeWrapper>
                    <PriceRangeWrapper>
                      <DownArrow />
                      <PriceRangeTextWrapper>
                        <ATPriceWrapper>
                          <PortfolioEntryLabelText>
                            All Time Low:{" "}
                          </PortfolioEntryLabelText>
                          <PortfolioEntryText>
                            {currency?.symbol + addCommas(marketData?.atl.usd)}
                          </PortfolioEntryText>
                        </ATPriceWrapper>
                        <span>
                          <PortfolioEntryText>
                            {new Date(
                              marketData?.atl_date.usd
                            ).toLocaleString()}
                          </PortfolioEntryText>
                        </span>
                      </PriceRangeTextWrapper>
                    </PriceRangeWrapper>
                  </PriceRangeDetailsWrapper>
                </PriceDetailsInnerWrapper>
              </PriceDetails>
              <MarketDetails>
                <MarketDetailsInnerWrapper>
                  <MarketDetailsTop>
                    <MarketDetailsLine>
                      <BulletPoint>+</BulletPoint>
                      <MarketDetailsLineText>
                        <PortfolioEntryLabelText>
                          Market Cap:
                        </PortfolioEntryLabelText>
                        <PortfolioEntryText>
                          {currency?.symbol +
                            addCommas(marketData?.market_cap.usd)}
                        </PortfolioEntryText>
                      </MarketDetailsLineText>
                    </MarketDetailsLine>
                    <MarketDetailsLine>
                      <BulletPoint>+</BulletPoint>
                      <MarketDetailsLineText>
                        <PortfolioEntryLabelText>
                          Fully Diluted Valuation:
                        </PortfolioEntryLabelText>
                        <PortfolioEntryText>
                          {currency?.symbol +
                            addCommas(marketData?.fully_diluted_valuation.usd)}
                        </PortfolioEntryText>
                      </MarketDetailsLineText>
                    </MarketDetailsLine>
                    <MarketDetailsLine>
                      <BulletPoint>+</BulletPoint>
                      <MarketDetailsLineText>
                        <PortfolioEntryLabelText>
                          Volume 24h:
                        </PortfolioEntryLabelText>
                        <PortfolioEntryText>
                          {currency?.symbol +
                            addCommas(marketData?.total_volume[currency.name])}
                        </PortfolioEntryText>
                      </MarketDetailsLineText>
                    </MarketDetailsLine>
                    <MarketDetailsLine>
                      <BulletPoint>+</BulletPoint>
                      <MarketDetailsLineText>
                        <PortfolioEntryLabelText>
                          Volume / Market:
                        </PortfolioEntryLabelText>
                        <PortfolioEntryText>
                          {"Total Volume / marketCap"}
                        </PortfolioEntryText>
                      </MarketDetailsLineText>
                    </MarketDetailsLine>
                  </MarketDetailsTop>
                  <MarketDetailsMiddle>
                    <MarketDetailsLine>
                      <BulletPoint>+</BulletPoint>
                      <MarketDetailsLineText>
                        <PortfolioEntryLabelText>
                          Total Volume:
                        </PortfolioEntryLabelText>
                        <PortfolioEntryText>
                          {currency?.symbol + marketData?.total_volume.usd}
                        </PortfolioEntryText>
                      </MarketDetailsLineText>
                    </MarketDetailsLine>
                    <MarketDetailsLine>
                      <BulletPoint>+</BulletPoint>
                      <MarketDetailsLineText>
                        <PortfolioEntryLabelText>
                          Circulating Supply:
                        </PortfolioEntryLabelText>
                        <PortfolioEntryText>
                          {marketData?.circulating_supply}
                        </PortfolioEntryText>
                      </MarketDetailsLineText>
                    </MarketDetailsLine>
                    <MarketDetailsLine>
                      <BulletPoint>+</BulletPoint>
                      <MarketDetailsLineText>
                        <PortfolioEntryLabelText>
                          Max Supply:
                        </PortfolioEntryLabelText>
                        <PortfolioEntryText>
                          {marketData?.max_supply}
                        </PortfolioEntryText>
                      </MarketDetailsLineText>
                    </MarketDetailsLine>
                  </MarketDetailsMiddle>
                  <MarketDetailsBottom>
                    <DoubleSpan>
                      <DoubleSpanTop>
                        <CoinTableRowText>200 m</CoinTableRowText>
                        <CoinTableRowText>200 m</CoinTableRowText>
                      </DoubleSpanTop>
                      <SliderWrapper
                        height="8px"
                        width="269px"
                        background="white"
                      >
                        <Slider width="50" background="blue" />
                      </SliderWrapper>
                    </DoubleSpan>
                  </MarketDetailsBottom>
                </MarketDetailsInnerWrapper>
              </MarketDetails>
            </SummaryContentWrapper>
          </Wrapper>
          {!isLoading && (
            <Wrapper>
              <Title>
                <div>Description:</div>
              </Title>
              <DescriptionWrapper>
                <DescriptionInnerWrapper>
                  <BookIcon src={Book} />
                  <DescriptionText>
                    <div
                      dangerouslySetInnerHTML={{ __html: coin?.description.en }}
                    />
                  </DescriptionText>
                </DescriptionInnerWrapper>
              </DescriptionWrapper>
              <BottomLinksWrapper>
                <BottomLinksInnerWrapper>
                  <BottomLinkWrapper>
                    <BottomLinkInnerWrapper>
                      <LinkIconWrapper>
                        <LinkDomain
                          href={coin?.links.blockchain_site[0]}
                          target="_blank"
                        >
                          <LinkIcon src={Link} alt="LinkIcon" />
                        </LinkDomain>
                      </LinkIconWrapper>
                      <LinkDomainWrapper>
                        <LinkDomain
                          href={coin?.links.blockchain_site[0]}
                          target="_blank"
                        >
                          {coin?.links.blockchain_site[0].replace(
                            /(^\w+:|^)\/\//,
                            ""
                          )}
                        </LinkDomain>
                      </LinkDomainWrapper>
                      <ClipboardIconWrapper>
                        <ClipboardButton text={url2} />
                      </ClipboardIconWrapper>
                    </BottomLinkInnerWrapper>
                  </BottomLinkWrapper>
                  <BottomLinkWrapper>
                    <BottomLinkInnerWrapper>
                      <LinkIconWrapper>
                        <LinkDomain
                          href={coin?.links.blockchain_site[1]}
                          target="_blank"
                        >
                          <LinkIcon src={Link} alt="LinkIcon" />
                        </LinkDomain>
                      </LinkIconWrapper>
                      <LinkDomainWrapper>
                        <LinkDomain
                          href={coin?.links.blockchain_site[1]}
                          target="_blank"
                        >
                          {coin?.links.blockchain_site[1].replace(
                            /(^\w+:|^)\/\//,
                            ""
                          )}
                        </LinkDomain>
                      </LinkDomainWrapper>
                      <ClipboardIconWrapper>
                        <ClipboardButton text={url3} />
                      </ClipboardIconWrapper>
                    </BottomLinkInnerWrapper>
                  </BottomLinkWrapper>
                  <BottomLinkWrapper>
                    <BottomLinkInnerWrapper>
                      <LinkIconWrapper>
                        <LinkDomain
                          href={coin?.links.blockchain_site[2]}
                          target="_blank"
                        >
                          <LinkIcon src={Link} alt="LinkIcon" />
                        </LinkDomain>
                      </LinkIconWrapper>
                      <LinkDomainWrapper>
                        <LinkDomain
                          href={coin?.links.blockchain_site[2]}
                          target="_blank"
                        >
                          {coin?.links.blockchain_site[2].replace(
                            /(^\w+:|^)\/\//,
                            ""
                          )}
                        </LinkDomain>
                      </LinkDomainWrapper>
                      <ClipboardIconWrapper>
                        <ClipboardButton text={url4} />
                      </ClipboardIconWrapper>
                    </BottomLinkInnerWrapper>
                  </BottomLinkWrapper>
                </BottomLinksInnerWrapper>
                <DurationSelector
                  durations={props.durations}
                  onClick={props.onClick}
                />
              </BottomLinksWrapper>
            </Wrapper>
          )}
        </OutsideWrapper>
      )}
    </div>
  );
};

export default CoinInfo;
