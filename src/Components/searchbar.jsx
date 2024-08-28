import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchInputContainer>
        <SearchInput type="text" placeholder="Buscar..." />
        <SearchIcon />
      </SearchInputContainer>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin-top: 1rem;
  padding: 0 1rem;
`;

const SearchInputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 2.5rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  outline: none;
  background-color: #ffffff;
  color: #212529;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.5rem 2rem;
  }

  &:focus {
    border-color: #4dabf7;
    box-shadow: 0 0 0 0.2rem rgba(77, 171, 247, 0.25);
  }

  &::placeholder {
    color: #6c757d;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #495057;
  pointer-events: none;
`;

export default SearchBar;