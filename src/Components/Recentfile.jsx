import React from 'react';
import styled from 'styled-components';

const RecentFilesContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 20px 0;
  position: relative;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  color: #343a40;
  margin: 0;
  position: absolute;
  top: 20px;
  left: 20px;
  font-weight: 600;
`;

const ViewAllLink = styled.a`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 0.9rem;
  color: #4dabf7;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #3b8fd8;
    text-decoration: underline;
  }
`;

const NoFilesMessage = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin-top: 60px;
`;

const RecentFiles = () => {
  return (
    <RecentFilesContainer>
      <Title>Archivos Recientes</Title>
      <ViewAllLink href="#">Ver todos</ViewAllLink>
      <NoFilesMessage>No hay archivos recientes</NoFilesMessage>
    </RecentFilesContainer>
  );
};

export default RecentFiles;