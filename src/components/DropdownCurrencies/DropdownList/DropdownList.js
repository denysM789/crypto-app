import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { List, ListItem, ListItemsWrapper } from "./DropdownList.styles";
import { closeDropdown, show, listRef } from "../Dropdown/DropdownCurrencies";

const currencies = [
  {
    name: "usd",
    isActive: true,
    symbol: "$",
  },
  {
    name: "eur",
    isActive: false,
    symbol: "€",
  },
  {
    name: "gbp",
    isActive: false,
    symbol: "§",
  },
];

function DropdownList({ closeDropdown, show, listRef }) {
  return (
    <AnimatePresence>
      {show && (
        <List
          initial={{ opacity: 1, height: "0%" }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0 }}
        >
          <ListItemsWrapper ref={listRef}>
            {currencies.map((el, index) => (
              <ListItem key={index} onClick={() => closeDropdown(el)}>
                {el.symbol}
              </ListItem>
            ))}
          </ListItemsWrapper>
        </List>
      )}
    </AnimatePresence>
  );
}

export default DropdownList;
