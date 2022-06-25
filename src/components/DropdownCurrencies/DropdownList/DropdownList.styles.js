import styled from "styled-components";
import { motion } from "framer-motion";

export const List = styled(motion.ul)`
    position: absolute;
    background-color: #fcfcfc;
  width: 108px;
  border-radius: 10px;
  top: 66px;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
  rgba(0, 0, 0, 0.22) 0px 15px 12px,
  display: grid;
  padding: 10px;
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #fcfcfc;
  border-radius: 10px;
  padding: ${({ padding }) => (padding ? padding : "6px")};
  cursor: ${({ noPointer }) => (noPointer ? "auto" : "pointer")};

  :hover {
    background-color: white;
  }
`;

export const ListItemsWrapper = styled.div``;
