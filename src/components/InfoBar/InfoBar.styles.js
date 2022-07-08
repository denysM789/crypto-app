import styled from "styled-components";

export const Wrapper = styled.div`
  height: 55px;
  max-width: 1300px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const InnerWrapper = styled.div`
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const SliderWrapper = styled.div`
  height: 13px;
  width: 55px;
  background: #2172e5;
  border-radius: 50px;
  overflow: hidden;
  border: 0.5px solid;
`;

export const Slider = styled.div`
  width: ${(props) => props.width}%;
  height: 100%;
  border-radius: 50px;
  background: ${(props) => props.background};
`;

export const BtcDominance = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Icon = styled.img``;

export const EthDominance = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
