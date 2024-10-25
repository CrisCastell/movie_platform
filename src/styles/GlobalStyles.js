import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Roboto', sans-serif;
    transition: all 0.25s linear;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.primary};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
