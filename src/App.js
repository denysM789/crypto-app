import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CoinList, CoinPage, Portfolio } from "pages";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "globalStyles";
import { lightTheme, darkTheme } from "globalStyles";
import { ThemeContext } from "./index";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/coin/:coinId" component={CoinPage}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
          <Route exact path="/" component={CoinList}></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
