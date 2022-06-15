import DropdownCurrencies from "components/DropdownCurrencies/DropdownCurrencies";
import Searchbar from "components/Searchbar";
import { Toggle } from "components/Toggle/Toggle";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavbarLeft, NavbarRight, Container } from "./Navbar.styles";
import { ThemeContext } from "../../index";

const Navbar = () => {
  const currencies = ["GBP", "EUR", "BTC", "ETH"];
  const { theme, toggleTheme } = useContext(ThemeContext);

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
          <DropdownCurrencies currencies={currencies} />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </NavbarRight>
    </Container>
  );
};

export default Navbar;
