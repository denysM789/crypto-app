import React, { useContext, useState } from "react";
import DropdownCurrencies from "components/DropdownCurrencies/Dropdown/DropdownCurrencies";
import Searchbar from "components/Searchbar";
import { Toggle } from "components/Toggle/Toggle";
import { Link } from "react-router-dom";
import { NavbarLeft, NavbarRight, Container } from "./Navbar.styles";
import { ThemeContext } from "../../index";

const Navbar = () => {
  const currencies = ["GBP", "EUR", "BTC", "ETH"];
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [currency, setCurrency] = useState("USD");

  return (
    <Container>
      <div className="flex space-x-4 list-none pl-8 pt-4">
        <li>
          <Link to="/">Coins</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
      </div>

      <NavbarRight>
        <div className="flex space-x-4 list-none pl-8 pt-4">
          <Searchbar />
          <DropdownCurrencies currency={currency} setCurrency={setCurrency} />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </NavbarRight>
    </Container>
  );
};

export default Navbar;
