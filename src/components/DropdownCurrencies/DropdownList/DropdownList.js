import React from "react";
import { AnimatePresence } from "framer-motion";
import { List, ListItem, ListItemsWrapper, Icon } from "./DropdownList.styles";

function DropdownList({ closeDropdown, show, listRef, currencies }) {
  return (
    <AnimatePresence>
      {show && (
        <List
          initial={{ opacity: 1, height: "auto" }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0 }}
        >
          <ListItemsWrapper ref={listRef}>
            {currencies.map((el, index) => (
              <ListItem key={index} onClick={() => closeDropdown(el)}>
                <Icon>{el.symbol}</Icon>
                {el.name}
              </ListItem>
            ))}
          </ListItemsWrapper>
        </List>
      )}
    </AnimatePresence>
  );
}

export default DropdownList;
