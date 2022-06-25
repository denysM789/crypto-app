import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import DropdownList from "../DropdownList/DropdownList";
import {
  CurrencyWrapper,
  CurrentCurrency,
  Wrapper,
} from "./DropdownCurrencies.styles";

const DropdownCurrencies = ({ currency, setCurrency }) => {
  const [show, setShow] = useState(false);
  const listRef = useRef();

  const closeDropdown = (el) => {
    setCurrency(el);
    setShow(false);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setShow(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, listRef]);

  const caretDown = (
    <IconContext.Provider value={{ size: "1.3rem", color: "#00FF5F" }}>
      <AiOutlineCaretDown />
    </IconContext.Provider>
  );

  const caretUp = (
    <IconContext.Provider value={{ size: "1.3rem", color: "#00FF5F" }}>
      <AiOutlineCaretUp />
    </IconContext.Provider>
  );

  return (
    <Wrapper>
      <CurrencyWrapper>
        <CurrentCurrency onClick={() => setShow(!show)}>
          {currency}
          {show ? caretUp : caretDown}
        </CurrentCurrency>
        <DropdownList
          show={show}
          closeDropdown={closeDropdown}
          setCurrency={setCurrency}
          listRef={listRef}
        />
      </CurrencyWrapper>
    </Wrapper>
  );
};

export default DropdownCurrencies;
