import { useState, useEffect } from "react";

export const useCurrencyChange = () => {
  const [activeCurrency, setActiveCurrency] = useState("USD");

  const setMode = (mode) => {
    window.localStorage.setItem("activeCurrency", mode);
    setActiveCurrency(mode);
  };

  return <div></div>;
};
