import styled from 'styled-components';
import { darkTheme } from '../../../../styles/theme';

export const FooterContainer = styled.footer`
  background-color: ${darkTheme.colors.backgroundDarker};
  color: ${darkTheme.colors.text};
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Section = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 2rem;

  h4 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: #fff;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
      a {
        text-decoration: none;
        color: ${darkTheme.colors.textDarker};
        font-size: 0.9rem;

        &:hover {
          color: #fff;
        }
      }
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    margin: 0 0.5rem;
    color: ${darkTheme.colors.text};
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #1dbf73;
    }
  }
`;

export const FooterBottom = styled.div`
  padding-top: 2rem;
  border-top: 1px solid #333;
  text-align: center;
  font-size: 0.8rem;
  color: ${darkTheme.colors.textDarker};
`;
