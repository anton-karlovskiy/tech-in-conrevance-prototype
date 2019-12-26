
import css from 'styled-jsx/css';

import theme from './theme';

export default css.global`
  * {
    box-sizing: border-box;
  }
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    margin-bottom: 50px;
    background: ${theme.palette.background.default};
    color: ${theme.palette.text.primary};
    font-size: ${theme.typography.fontSize}px;
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightRegular};
    text-align: center;
  }
  p {
    font-size: 1em;
    color: ${theme.palette.text.secondary};
    margin: 0;
    margin-bottom: 16px;
    line-height: 1.5;
  }
  a {
    text-decoration: none;
    color: unset;
  }
  .uppercase {
    text-transform: uppercase;
  }
  h1 {
    font-size: 40px;
    font-weight: 400;
    margin: 0;
    margin-bottom: 8px;
  }
  h4 {
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    margin-bottom: 4px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  @media screen and (min-width: ${theme.breakpoints.sm}px) {
    h1 {
      font-size: 50px;
    }
  }
  @media screen and (min-width: ${theme.breakpoints.md}px) {
    h1 {
      font-size: 60px;
    }
  }
`;
