import styled from "styled-components";

export const Wrapper = styled.div`
  height: 50px;
  widht: 108px;
  position: relative;
  align-items: center;
  place-items: center;
  border-radius: 10px;
`;

export const CoinWrapper = styled.div`
  display: flex;
  align-items: center;
  place-items: center;
  height: 50px;
  width: 208px;
  align-items: center;
  gap: 12px;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const CurrentCoin = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 50px;
  width: 208px;
  position: relative;
  border-radius: 10px;
`;

export const Icon = styled.img`
  display: grid;
  justify-items: center;
  align-content: center;
  margin-left: 10px;
  height: 26px;
  width: 26px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: 0;
`;
