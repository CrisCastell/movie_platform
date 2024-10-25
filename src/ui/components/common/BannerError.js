import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background-color: #e74c3c;
  color: white;
  padding: 1rem;
  text-align: center;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

const BannerError = ({ message }) => {
  return (
    <BannerContainer>
      <p>{message}</p>
    </BannerContainer>
  );
};

export default BannerError;
