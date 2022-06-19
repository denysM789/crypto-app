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

`;

export const lightTheme = {
  body: "#fcfcfc",
  text: "#121212",
};

export const darkTheme = {
  body: "#1f2128",
  text: "#fff",
};
