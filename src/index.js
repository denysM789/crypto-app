import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { useDarkMode } from "hooks/useDarkMode";
import { useCurrencyChange } from "hooks/useCurrencyChange";

export const ThemeContext = React.createContext();

export const CurrencyContext = React.createContext();
const CurrencySwitcherProvider = ({ children }) => {
  const [currency, currencies, setCurrency] = useCurrencyChange();

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, currencies }}>
      {children}
    </CurrencyContext.Provider>
  );
};

const ThemeSwitcherProvider = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeSwitcherProvider>
      <CurrencySwitcherProvider>
        <App />
      </CurrencySwitcherProvider>
    </ThemeSwitcherProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
