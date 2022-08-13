import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(props) => props.theme.money.green};
  color: ${(props) => props.theme.text};
  font-size: 23px;
  font-weight: 800;
  line-height: 0px;
  min-width: 507px;
  min-height: 55px;
  border-radius: 10px;
  margin-bottom: 10px;
  :hover {
    cursor: pointer;
  }
`;
