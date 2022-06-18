import styled from "styled-components";

export const CoinLogo = styled.img`
  size: 34px;
  border-radius: 50%;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  text-align: left;
  height: 72px;
`;

export const StyledTHead = styled.thead`
  justify-content: space-between;
  max-width: 100%;
`;

export const StyledTable = styled.table`
  width: 100%;
`;

export const Styled24VMarketCapTextWrapper = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const SliderWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50px;
  background: ${(props) => props.background};
  overflow: hidden;
  border: 0.5px solid;
`;

export const Slider = styled.div`
  width: ${(props) => props.width}%;
  height: 100%;
  border-radius: 50px;
  background: ${(props) => props.background};
`;

export const DoubleSpan = styled.span`
  display: grid;
`;
