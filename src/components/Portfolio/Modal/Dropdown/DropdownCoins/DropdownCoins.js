import React, { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import DropdownListCoins from "../DropdownListCoins/DropdownListCoins";
import {
  CoinWrapper,
  CurrentCoin,
  Wrapper,
  Icon,
} from "./DropdownCoins.styles";

const DropdownCoins = ({
  showList,
  coins,
  coin,
  closeModal,
  openDropdown,
  closeDropdown,
}) => {
  const listRef = useRef();

  useEffect(() => {
    const handleClickOutside = () => {
      return null;
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showList, listRef]);

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
      <CoinWrapper>
        <CurrentCoin onClick={() => openDropdown(!showList)}>
          {coin && <Icon src={coin?.image}></Icon>}
          {coin?.name}
          {showList ? caretUp : caretDown}
        </CurrentCoin>
        <DropdownListCoins
          showList={showList}
          closeDropdown={closeDropdown}
          listRef={listRef}
          coins={coins}
          closeModal={closeModal}
        />
      </CoinWrapper>
    </Wrapper>
  );
};

export default DropdownCoins;
