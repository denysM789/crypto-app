import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  List,
  ListItem,
  ListItemsWrapper,
  Icon,
} from "./DropdownListCoins.styles";

const DropdownListCoins = ({ closeDropdown, listRef, coins, showList }) => {
  return (
    <AnimatePresence>
      {showList && (
        <List
          initial={{ opacity: 1, height: "auto" }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0 }}
        >
          <ListItemsWrapper ref={listRef}>
            {coins.map((el, index) => (
              <ListItem key={index} onClick={() => closeDropdown(el)}>
                <Icon src={el.image}></Icon>
                {el.name}
              </ListItem>
            ))}
          </ListItemsWrapper>
        </List>
      )}
    </AnimatePresence>
  );
};

export default DropdownListCoins;
