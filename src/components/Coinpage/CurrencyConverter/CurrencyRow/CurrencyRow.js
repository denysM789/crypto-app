import React, { useEffect, useState } from "react";
import { CurrencyContext } from "index";
import {
  Wrapper,
  Name,
  CurrencyName,
  InputPriceDiv,
  Input,
  CoinInput,
} from "./CurrencyRow.styles";

export const CurrencyRow = (props) => {
  const { currency } = React.useContext(CurrencyContext);
  const symbol = props.coin?.symbol.toUpperCase();
  const activeFiatCurrencySymbol = currency?.name;

  if (props.currentPrice) {
    return (
      <Wrapper>
        <CoinInput>
          <Name>
            <CurrencyName>{activeFiatCurrencySymbol}</CurrencyName>
          </Name>
          <InputPriceDiv>
            <span>{currency.symbol}</span>
            <Input value={props.value} onChange={props.onChange} />
          </InputPriceDiv>
        </CoinInput>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <CoinInput>
        <Name>
          <CurrencyName>{symbol}</CurrencyName>
        </Name>
        <InputPriceDiv>
          <Input value={props.value} onChange={props.onChange} />
        </InputPriceDiv>
      </CoinInput>
    </Wrapper>
  );
};
