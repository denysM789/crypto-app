import React, { useContext, useEffect, useRef, useState } from "react";
import DropdownCurrencies from "components/DropdownCurrencies/Dropdown/DropdownCurrencies";
import Searchbar from "components/Searchbar";
import { Toggle } from "components/Toggle/Toggle";
import { Link } from "react-router-dom";
import {
  NavbarRight,
  NavbarLeft,
  Wrapper,
  NavLinkWrapper,
  Navigation,
} from "./Navbar.styles";
import { ThemeContext } from "../../index";
//import { currencies } from "../../utils";
import { NavLinkStyle } from "styles/Fonts";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeCurrency, setActiveCurrency] = useState([]);

  return (
    <Wrapper>
      <Navigation>
        <NavbarLeft>
          <Link to="/">
            <NavLinkWrapper>
              <NavLinkStyle>Coins</NavLinkStyle>
            </NavLinkWrapper>
          </Link>

          <Link to="/portfolio">
            <NavLinkWrapper>
              <NavLinkStyle>Portfolio</NavLinkStyle>
            </NavLinkWrapper>
          </Link>
        </NavbarLeft>

        <NavbarRight>
          <Searchbar />
          <DropdownCurrencies
            currency={activeCurrency}
            setCurrency={setActiveCurrency}
          />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </NavbarRight>
      </Navigation>
    </Wrapper>
  );
};

export default Navbar;
