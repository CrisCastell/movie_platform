import styled from 'styled-components';

export const Bar = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 50px;
  border: 2px solid #ccc;
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border-color: #ff385c;
    box-shadow: 0 0 5px rgba(255, 56, 92, 0.5);
  }
`;

export const SearchButton = styled.button`
  background-color: #ff385c;
  color: white;
  font-size: 1rem;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  margin-left: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e11d48;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`;
