import styled from 'styled-components';
import { darkTheme } from '../../../../styles/theme';

export const Button = styled.a`
  text-decoration:none;
  border: 3px solid;
  border-image-slice: 1;
  background:  ${darkTheme.colors.gradient} !important;
  border-image-source: ${darkTheme.colors.gradient} !important;
  text-decoration: none;
  transition: all 0.4s ease;
  color: ${darkTheme.colors.text} ;

  &:hover, &:focus {
    background: ${darkTheme.colors.text} !important;
    border: 2px solid #fff !important;
    color: ${darkTheme.colors.primary} !important;
  }
`;
