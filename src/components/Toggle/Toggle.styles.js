import styled from "styled-components";

export const ToggleWrapper = styled.div`
  display: grid;
  place-items: center;
  -webkit-box-align: center;
  width: 54px;
  height: 52px;
  border-radius: 10px;
  background: ${(props) => props.theme.card.active};
`;
