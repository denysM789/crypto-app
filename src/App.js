import React, { useState } from "react";
import { CoinList, CoinPage, Portfolio } from "pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar  from './components/Navbar/Navbar';
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/globalStyles";
import { lightTheme, darkTheme } from "styles/globalStyles";
import { Toggle } from "./components/Toggle/Toggle.js";
import { useDarkMode } from "styles/useDarkMode";




export default function App() {

  
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles/>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/coin/:coinId" component={CoinPage}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
          <Route exact path="/" component={CoinList}></Route>
        </Switch>
    </Router>
    </ThemeProvider>
    
  );
}
