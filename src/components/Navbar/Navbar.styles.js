import styled from "styled-components";

export const NavbarLeft = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 1.25rem;
  gap: 2em;
  & a {
    color: black;
  }
`;

export const NavbarRight = styled.ul`
  list-style: none;
  display: flex;
  padding-right: 1.25rem;
  gap: 2em;
  & a {
    color: black;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.0625rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`;

export const ToggleWrapper = styled.div`
  display: grid;
  place-items: center;
  -webkit-box-align: center;
  width: 54px;
  height: 52px;
  border-radius: 10px;
  background: rgb(247, 247, 247);
`;
