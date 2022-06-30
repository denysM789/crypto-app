import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }

    p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

card {
  background: ${({ theme }) => theme.card.background};
  active: ${({ theme }) => theme.card.active};
}

`;

export const lightTheme = {
  body: "#fcfcfc",
  text: "#191b1f",
  card: {
    background: "#ffffff",
    active: "#fcfcfc",
  },
  money: {
    green: "#00ff5f",
    red: "#FE1040",
    blue: "#2172e5",
    background: "#ffffff",
  },
};

export const darkTheme = {
  body: "#1f2128",
  text: "#ffffff",
  card: {
    background: "#191b1f",
    active: "#2c2f36",
  },
  money: {
    green: "#00ff5f",
    red: "#FE1040",
    blue: "#2172e5",
    background: "#191B1F",
  },
};
