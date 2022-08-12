import React, { useContext } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import { CoinList, Coin, Portfolio } from "pages";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "globalStyles";
import { lightTheme, darkTheme } from "globalStyles";
import { ThemeContext } from "./index";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import { getAllCoins } from "./store/coinOverview/actions";
import { getBitcoinData } from "./store/coinOverview/actions";
import { getCoinInfo } from "./store/coinInfo/actions";
import { getMarketData } from "./store/infoBar/actions";
import { getCoinData } from "./store/bottomChart/actions";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/coin/:coinId" component={Coin}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
          <Route exact path="/" component={CoinList}></Route>
        </Switch>
        <ScrollToTop />
      </Router>
    </ThemeProvider>
  );
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  getAllCoins,
  getBitcoinData,
  getCoinInfo,
  getMarketData,
  getCoinData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
