import styled from "styled-components";

export const ScrollToTopButton = styled.button`
  opacity: ${(props) => props.BtnOpacity};
  position: fixed;
  right: 0;
  bottom: 0;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.card.background}
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px;
`;
