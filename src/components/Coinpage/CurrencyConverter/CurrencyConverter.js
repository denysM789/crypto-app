import React, { useEffect, useState } from "react";
import axios from "axios";

import ConverterIcon from "ConverterIcon.svg";
import { FormWrapper, Wrapper } from "./CurrencyConverter.styles";
import { CurrencyRow } from "./CurrencyRow/CurrencyRow";
import { CurrencyContext } from "index";

const CurrencyConverter = (props) => {
  const [coin, setCoin] = useState();
  const [fiatAmount, setFiatAmount] = useState("");
  const [cryptoAmount, setCryptoAmount] = useState(1);
  const { currency } = React.useContext(CurrencyContext);

  const getCoinInfo = async () => {
    const activeCoinId = props.coinId.coinId;
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${activeCoinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      setCoin(data);
      setFiatAmount(data.market_data.current_price[currency?.abbr]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFiatAmountChange = (e) => {
    const amountValue = e.target.value;
    if (amountValue === "") {
      setCryptoAmount("");
      setFiatAmount("");
    } else {
      setCryptoAmount(amountValue);
      setFiatAmount(
        amountValue * coin?.market_data.current_price[currency?.abbr]
      );
    }
  };

  const handleCryptoAmountChange = (e) => {
    const amountValue2 = e.target.value;
    if (amountValue2 === "") {
      setCryptoAmount("");
      setFiatAmount("");
    } else {
      setCryptoAmount(
        amountValue2 / coin?.market_data.current_price[currency?.abbr]
      );
      setFiatAmount(amountValue2);
    }
  };

  useEffect(() => {
    getCoinInfo();
  }, [currency]);

  useEffect(() => {
    getCoinInfo();
  }, []);

  return (
    <Wrapper>
      <FormWrapper>
        <CurrencyRow
          coin={coin}
          value={fiatAmount}
          currentPrice={fiatAmount}
          onChange={handleCryptoAmountChange}
        />
        <img src={ConverterIcon} />
        <CurrencyRow
          coin={coin}
          value={cryptoAmount}
          onChange={handleFiatAmountChange}
        />
      </FormWrapper>
    </Wrapper>
  );
};

export default CurrencyConverter;
