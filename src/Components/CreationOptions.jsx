import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFileAlt, FaFileExcel, FaFilePowerpoint } from 'react-icons/fa';

const CreationOptions = () => {
  return (
    <OptionsContainer>
      <ScrollableContainer>
        <Option>
          <StyledLink to="../TextEditorPage">
            <IconContainer>
              <FaFileAlt />
            </IconContainer>
            <OptionLabel>Hoja de texto</OptionLabel>
          </StyledLink>
        </Option>
        <Option>
          <StyledLink to="#">
            <IconContainer>
              <FaFileExcel />
            </IconContainer>
            <OptionLabel>Hoja de cálculo</OptionLabel>
          </StyledLink>
        </Option>
        <Option>
          <StyledLink to="#">
            <IconContainer>
              <FaFilePowerpoint />
            </IconContainer>
            <OptionLabel>Presentación</OptionLabel>
          </StyledLink>
        </Option>
        {/* Agrega más opciones aquí según sea necesario */}
      </ScrollableContainer>
    </OptionsContainer>
  );
};

const OptionsContainer = styled.div`
  margin-top: 1rem;
  padding: 1.5rem 1rem;
  background: #ffffff;
  border-radius: 8px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
`;

const ScrollableContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  padding-bottom: 1rem;
  width: 100%;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ced4da;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f8f9fa;
  }
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  min-width: 120px;
  margin-right: 1.5rem;
`;

const IconContainer = styled.div`
  font-size: 2.5rem;
  color: #495057;
  margin-bottom: 0.5rem;
  transition: color 0.2s, transform 0.2s;
`;

const OptionLabel = styled.div`
  font-size: 0.9rem;
  color: #212529;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover ${IconContainer} {
    color: #4dabf7;
    transform: scale(1.05);
  }

  &:hover ${OptionLabel} {
    color: #4dabf7;
  }
`;

export default CreationOptions;