import { useState, useEffect } from "react";

export const useCurrencyChange = () => {
  const [currency, setCurrency] = useState(null);

  const setMode = (mode) => {
    window.localStorage.setItem("activeCurrency", JSON.stringify(mode));
    setCurrency(mode);
  };

  const currencies = [
    {
      name: "USD",
      abbr: "usd",
      symbol: "$",
    },
    {
      name: "EUR",
      abbr: "eur",
      symbol: "€",
    },
    {
      name: "GBP",
      abbr: "gbp",
      symbol: "£",
    },
  ];

  useEffect(() => {
    const activeCurrency = JSON.parse(
      window.localStorage.getItem("activeCurrency")
    );
    activeCurrency ? setCurrency(activeCurrency) : setMode(currencies[0]);
  }, []);

  return [currency, currencies, setMode];
};
