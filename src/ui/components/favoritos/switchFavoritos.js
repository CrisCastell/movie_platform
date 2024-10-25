// src/ui/components/common/FavoritesSwitch.js
import React from 'react';
import { Button } from '../common/CustomBtn/CustomBtn.styled';
import { ButtonGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';

// Styled-component para mejorar el estilo de los botones
const StyledButton = styled(Button)`
  &.active {
    background-color: ${darkTheme.colors.gradient}; 
    border-color: ${darkTheme.colors.gradient};
  }

  &:hover {
    background-color: #16a085;
    border-color: #16a085;
  }

  &.inactive {
    background-color: ${darkTheme.colors.text}; 
    border-color: ${darkTheme.colors.text};
    color:${darkTheme.colors.gradient};
  }
`;

const FavoritosSwitch = ({ selectedType, onTypeChange }) => {
  return (
    <ButtonGroup>
      <StyledButton
        className={`mb-2 btn ${selectedType === 'Peliculas' ? 'active' : 'inactive'}`}
        onClick={() => onTypeChange('Peliculas')}
      >
        Películas
      </StyledButton>
      <StyledButton
        className={`ml-3 mb-2 btn ${selectedType === 'Tv Shows' ? 'active' : 'inactive'}`}
        onClick={() => onTypeChange('Tv Shows')}
      >
        TV Shows
      </StyledButton>
    </ButtonGroup>
  );
};

export default FavoritosSwitch;
