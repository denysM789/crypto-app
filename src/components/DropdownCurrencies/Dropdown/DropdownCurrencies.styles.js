import styled from "styled-components";

export const Wrapper = styled.div`
  height: 50px;
  widht: 108px;
  position: relative;
  align-items: center;
  place-items: center;
  border-radius: 10px;
`;

export const CurrencyWrapper = styled.div`
  display: flex;
  align-items: center;
  place-items: center;
  height: 50px;
  width: 108px;
  align-items: center;
  gap: 12px;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const CurrentCurrency = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 50px;
  width: 108px;
  position: relative;
  border-radius: 10px;
  background: ${(props) => props.theme.card.active};
`;

export const Icon = styled.div`
  color: ${(props) => props.theme.money.green};
  display: grid;
  justify-items: center;
  align-content: center;
  margin-left: 10px;
  height: 26px;
  width: 26px;
  border-radius: 50%;
  background: ${(props) => props.theme.money.background};
`;
