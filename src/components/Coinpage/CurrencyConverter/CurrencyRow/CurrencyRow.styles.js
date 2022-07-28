import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  gap: 30px;
  margin-top: 47px;
  margin-bottom: 21px;
`;

export const Name = styled.div`
  height: 36px;
  width: 65px;
  background: ${(props) => props.theme.money.green};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: grid;
  justify-items: center;
  align-content: center;
`;

export const CurrencyName = styled.div`
  font-size: 17px;
  font-weight: medium;
  line-height: 120%;
`;

export const InputPriceDiv = styled.div`
  width: 198px;
  height: 36px;
  background: ${(props) => props.theme.card.active};
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  :hover {
    cursor: text;
  }
`;

export const Input = styled.input`
  background: none;
  border: none;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  color: ${(props) => props.theme.color};
  &:focus {
    outline: none;
  }
`;

export const CoinInput = styled.div`
  display: flex;
`;
