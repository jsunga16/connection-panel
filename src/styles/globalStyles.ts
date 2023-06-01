import { createGlobalStyle } from "styled-components";
import OpenSans from "./OpenSans.woff2";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSans}) format('woff2');
  }

  button {
    font-family: 'Open Sans';
    font-size: 14px;
    cursor: pointer;
  }

  select {
    cursor: pointer;
  }
`;
