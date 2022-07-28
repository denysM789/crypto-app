import styled from "styled-components";

export const ChartWrapper = styled.div`
  width: ${(props) => props.width}px;
  height: 220px;
`;

export const OuterWrapper = styled.div`
  width: 1700px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 19px;
  margin-left: 10%;
  margin-right: 10%;
  border: solid pink 1px;
`;

export const InnerWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 19px;
  margin-left: 10%;
  margin-right: 10%;
  border: solid yellow 1px;
`;

export const DurationSelectorWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  display: grid;
  justify-items: center;
  align-items: center;
  margin-bottom: 19px;
  margin-left: 10%;
  margin-right: 10%;
  border: solid 1px green;
`;
