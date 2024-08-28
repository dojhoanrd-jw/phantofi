import React from 'react';
import styled from 'styled-components';
import { FaCog, FaQuestionCircle } from 'react-icons/fa';

const Menu = () => {
  return (
    <Sidebar>
      <SidebarItem>
        <IconWrapper>
          <FaCog size={20} />
        </IconWrapper>
        <SidebarLabel>Ajustes</SidebarLabel>
      </SidebarItem>
      <SidebarItem>
        <IconWrapper>
          <FaQuestionCircle size={20} />
        </IconWrapper>
        <SidebarLabel>Ayuda</SidebarLabel>
      </SidebarItem>
    </Sidebar>
  );
};

const Sidebar = styled.div`
  position: fixed;
  top: 5rem;
  left: 0;
  height: 100%;
  width: 250px;
  background: #f8f9fa; /* Fondo gris claro */
  color: #333; 
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); 
  z-index: 1000;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  color: #333;
  border-bottom: 1px solid #ddd; 

  &:hover {
    background-color: #e0e0e0; /* Fondo gris más claro en hover */
    
    svg {
      color: #4dabf7; /* Color de los íconos en hover, negro */
    }
  }

  svg {
    margin-right: 1rem;
    color: #555; /* Color de los íconos por defecto */
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
`;

const SidebarLabel = styled.span`
  flex: 1;
  text-align: left;
`;

export default Menu;
