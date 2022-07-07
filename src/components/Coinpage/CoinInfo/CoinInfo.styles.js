import styled from "styled-components";
import { motion } from "framer-motion";

export const OutsideWrapper = styled.div`
  text-align: left;
  border-radius: 10px;
  display: block;
  max-width: 1580px;
  width: 100%;
  padding: 15px;
`;

export const Wrapper = styled.div`
  justify-content: space-between;
  position: relative;
  padding: 17px 17px 17px 17px;
  max-width: 1300px;
  table-layout: fixed;
  width: 100%;
  display: block;
`;

export const Title = styled.div`
  justify-self: start;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.card.background};
  border-radius: 10px;
  display: grid;
  justify-items: center;
  align-items: center;
  margin-bottom: 19px;
  margin-left: 10%;
  margin-right: 10%;
`;

export const BookIcon = styled.img`
  width: 19px;
  height: 19px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CopyButton = styled.button`
  display: inline-block;
  background: rgba(119, 131, 143, 0.1);
  border-color: transparent;
  border-radius: 50% !important;
`;

export const DescriptionInnerWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  padding-right: 19px;
  padding-left: 19px;
  padding-top: 4px;
  padding-bottom: 34px;
`;

export const DescriptionText = styled.div`
  line-height: 150% !important;
  text-align: center;
`;

export const IconBackground = styled.div`
  background: ${(props) => props.theme.card.active};
  border-radius: 10px;
  width: 83px;
  height: 83px;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const SummaryContentWrapper = styled.div`
  max-width: 1713px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 19px;
  margin-left: 10%;
  margin-right: 10%;
`;

export const ChartCategoryText = styled.p`
  font-size: 18px;
  font-weight: semi-bold;
  line-height: 10%;
`;

export const CoinId = styled.div`
  height: 303px;
  width: 206px;
  display: grid;
  gap: 16px;
`;

export const CoinName = styled.div`
  width: 150px;
  text-align: center;
  word-wrap: break-word;
  overflow: hidden;
`;

export const PortfolioEntryTitle = styled.div`
  font-size: 20px;
  font-weight: semi-bold;
  line-height: 100%;
`;

export const LinkWrapper = styled.div`
  background: ${(props) => props.theme.card.background};
  border-radius: 10px;
  height: 50px;
  max-width: 306px;
  min-width: 250px;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const LinkInnerWrapper = styled.div`
  background: ${(props) => props.theme.card.background};
  border-radius: 10px;
  height: 50px;
  width: 206px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkIconWrapper = styled.div`
  color: ${(props) => props.theme.color};
  fill: ${(props) => props.theme.color};
`;

export const LinkIcon = styled.img`
  color: ${(props) => props.theme.color};
  fill: ${(props) => props.theme.color};
`;

export const ClipboardIcon = styled.img``;

export const LinkDomain = styled.a`
  font-size: 13px;
  font-weight: regular;
  line-height: 0%;
`;

export const ToolTipSpan = styled(motion.span)`

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
  rgba(0, 0, 0, 0.22) 0px 15px 12px,
  font-weight: light;
  font-size: 9px;
  margin-top: 20px;
`;

export const LinkDomainWrapper = styled.div``;

export const ClipboardIconWrapper = styled.div``;

export const IdOuterWrapper = styled.div`
  background: ${(props) => props.theme.card.background};
  border-radius: 10px;
  height: 236px;
  max-width: 306px;
  min-width: 250px;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const IdInnerWrapper = styled.div`
  display: grid;
  gap: 6px;
  justify-items: center;
`;

export const ChartSubText = styled.p`
  font-size: 22px;
  font-weight: regular;
  line-height: 0%;
`;

export const ChartHeaderText = styled.h1`
  font-size: 30px;
  font-weight: semi-bold;
  line-height: 10%;
`;

export const PriceDetails = styled.div`
  background: ${(props) => props.theme.card.background};
  border-radius: 10px;
  height: 303px;
  width: 33%;
  max-width: 370px;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const PriceDetailsInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const PercentWrapper = styled.span`
  display: flex;
  gap: 3px;
  align-items: center;
`;

export const PriceText = styled.span`
  color: ${(props) =>
    props.price >= 0 ? props.theme.money.green : props.theme.money.red};
  line-height: 0px;
`;

export const ProfitWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 25px;
  margin-bottom: 5px;
`;

export const PriceRangeDetailsWrapper = styled.div``;

export const PriceRangeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PriceRangeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ATPriceWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const PortfolioEntryLabelText = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 0px;
`;

export const PortfolioEntryText = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 0px;
`;

export const MarketDetails = styled.div`
  background: ${(props) => props.theme.card.background};
  border-radius: 10px;
  height: 303px;
  max-width: 437px;
  width: 33%;
`;

export const MarketDetailsInnerWrapper = styled.div`
  margin-left: 38px;
  margin-top: 23px;
`;

export const MarketDetailsTop = styled.div`
  margin-bottom: 19px;
`;

export const MarketDetailsLine = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MarketDetailsLineText = styled.div`
  display: flex;
  gap: 4px;
`;

export const BulletPoint = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 7px;
  background: ${(props) => props.theme.money.blue};
  display: grid;
  justify-items: center;
  align-content: center;
`;

export const DoubleSpanTop = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DoubleSpan = styled.span`
  display: grid;
  width: 215px;
`;

export const MarketDetailsMiddle = styled.div``;

export const MarketDetailsBottom = styled.div``;

export const BottomLinksWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  display: grid;
  justify-items: center;
  align-items: center;
  margin-left: 10%;
  margin-right: 10%;
  height: 100px;
`;

export const BottomLinksInnerWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 19px;
  margin-left: 10%;
  margin-right: 10%;
`;

export const BottomLinkWrapper = styled.div`
  background: ${(props) => props.theme.card.background};
  border-radius: 10px;
  height: 50px;
  max-width: 406px;
  min-width: 350px;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const BottomLinkInnerWrapper = styled.div`
  background: ${(props) => props.theme.card.background};
  border-radius: 10px;
  height: 50px;
  width: 206px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BottomChartWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  display: grid;
  justify-items: center;
  align-items: center;
  margin-bottom: 19px;
  margin-left: 10%;
  margin-right: 10%;
`;
