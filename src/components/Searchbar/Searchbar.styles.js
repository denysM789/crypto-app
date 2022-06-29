import styled from "styled-components";

export const Wrapper = styled.form`
  width: 408px;
  height: 50px;
  background: ${(props) => props.theme.card.active};
  border-radius: 10px;
  display: flex;
  gap: 16px;
  align-items: center;
  position: relative;
  :hover {
    cursor: text;
  }
`;

export const Input = styled.input`
  font-size: 14px;
  background: none;
  color: ${(props) => props.theme.color};
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  border: none;
  font-weight: bold;
  ::placeholder {
    color: ${(props) => props.theme.color};
  }
  &:focus {
    outline: none;
  }
`;
