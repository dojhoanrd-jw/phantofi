import React from 'react';
import styled from 'styled-components';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

const UserMenu = () => {
  return (
    <MenuWrapper>
      <MenuItem>
        <IconWrapper>
          <FaUser size={18} />
        </IconWrapper>
        Perfil
      </MenuItem>
      <MenuItem>
        <IconWrapper>
          <FaSignOutAlt size={18} />
        </IconWrapper>
        Cerrar Sesión
      </MenuItem>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 4px;
  padding: 0.25rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #212529;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f8f9fa;
  }

  &:hover svg {
    color: #343a40;
  }
`;

const IconWrapper = styled.div`
  margin-right: 0.75rem;
  color: #495057;
  display: flex;
  align-items: center;
`;

export default UserMenu;