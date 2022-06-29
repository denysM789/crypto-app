import styled from "styled-components";

export const OutsideWrapper = styled.div`
  text-align: left;
  height: 72px;
  border-radius: 10px;
  display: block;
  width: 1713px;
`;

export const Wrapper = styled.table`
  justify-content: space-between;
  position: relative;
  padding: 17px 17px 17px 17px;
  width: 100%;
  display: block;
`;

export const HeaderRow = styled.thead`
  text-align: left;
  width: 100%;
  tr {
    width: 100%;
  }
  th {
    line-height: 100%;
  }
`;

export const TableRowsWrapper = styled.tbody`
  text-align: left;
  height: 72px;
  td {
    line-height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ChangeSpan = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const TokenSpan = styled.span`
  display: flex;
  gap: 13px;
  align-items: center;
`;

export const Icon = styled.img`
  height: 33px;
  width: 33px;
`;

export const THNum = styled.th`
  widht: 0.3%;
  text-overflow: ellipsis;
`;

export const THName = styled.th`
  width: 18.4%;
  text-overflow: ellipsis;
`;

export const THPrice = styled.th`
  width: 7.9%;
`;

export const TH1h = styled.th`
  width: 7.4%;
`;

export const TH24h = styled.th`
  width: 8.3%;
`;

export const TH7d = styled.th`
  width: 7.5%;
`;

export const TH24VolMarCap = styled.th`
  width: 18.7%;
`;

export const THCircTotSup = styled.th`
  width: 18.6%;
`;

export const THLast7d = styled.th`
  width: 8.6%;
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
