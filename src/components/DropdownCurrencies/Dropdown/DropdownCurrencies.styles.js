import styled from "styled-components";

export const Wrapper = styled.div`
  height: 50px;
  widht: 108px;
  position: relative;
  border-radius: 10px;
`;

export const CurrencyWrapper = styled.div`
  display: flex;
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
`;
