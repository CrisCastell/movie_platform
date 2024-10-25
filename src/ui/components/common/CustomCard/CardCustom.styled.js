import styled from 'styled-components';
import { darkTheme } from '../../../../styles/theme';

export const CardCustom = styled.div`
  background: ${darkTheme.colors.primary};
  border: 1px solid ${darkTheme.colors.primary};
  border-radius: 8px;
  color: rgba(250, 250, 250, 0.8);
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  width: 18rem;
  height: 450px !important;
  transition: transform 0.3s ease, background 0.3s ease;

  h5 { 
    cursor: pointer;
    color: ${darkTheme.colors.text}; 

  }
  h5:hover{
    color: ${darkTheme.colors.backgroundDarker};
  }

  &:hover {
    transform: scale(1.05);
    background: lighten(${darkTheme.colors.primary}, 10%); 
  }
`;

export const CardImageTop = styled.img`
  border-radius: 8px;
  width: 95%;
  height: 160px;
  object-fit:cover;
`;