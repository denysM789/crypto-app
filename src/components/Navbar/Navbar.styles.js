import styled from "styled-components";

export const Wrapper = styled.header`
  color: ${(props) => props.theme.color};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Navigation = styled.div`
  height: 86px;
  width: 100%;
  background: ${(props) => props.theme.card.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinkWrapper = styled.div`
  padding: 8px 32px;
  border-radius: 10px;
  background: ${(props) => props.theme.card.active};
  :hover {
    cursor: pointer;
  }
`;

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
