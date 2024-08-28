import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import Menu from '../Components/menu';
import UserMenu from '../Components/usermenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const userMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsUserMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    if (isMenuOpen || isUserMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, isUserMenuOpen]);

  return (
    <HeaderContainer>
      <LeftSection>
        <MenuIcon onClick={toggleMenu}>
          <FaBars size={24} />
        </MenuIcon>
        <AppName>
          <AppIcon src="image/img.png" alt="App Icon" />
          <AppTitle>Phantofi</AppTitle>
        </AppName>
      </LeftSection>
      <RightSection>
        <UserIcon onClick={toggleUserMenu}>
          <FaUserCircle size={40} />
        </UserIcon>
      </RightSection>
      {isMenuOpen && (
        <MenuContainer ref={menuRef}>
          <Menu />
        </MenuContainer>
      )}
      {isUserMenuOpen && (
        <UserMenuContainer ref={userMenuRef}>
          <UserMenu />
        </UserMenuContainer>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #f8f9fa;
  color: #212529;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #e9ecef;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.div`
  margin-right: 1rem;
  cursor: pointer;
  color: #495057;
  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: #4dabf7;
    transform: scale(1.05);
  }
`;

const AppName = styled.div`
  display: flex;
  align-items: center;
`;

const AppIcon = styled.img`
  height: 32px;
  width: 32px;
  margin-right: 0.5rem;
`;

const AppTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: #343a40;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const UserIcon = styled.div`
  cursor: pointer;
  color: #495057;
  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: #4dabf7;
    transform: scale(1.05);
  }
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 4rem;
  left: 0;
  height: 100%;
  width: 250px;
  background: transparent;
  
  z-index: 1000;
  
`;

const UserMenuContainer = styled.div`
  position: fixed;
  top: 60px;
  right: 10px;
  background: #ffffff;
  border-radius: 4px;
  padding: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border: 1px solid #e9ecef;
`;

export default Header;