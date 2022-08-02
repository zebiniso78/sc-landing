import React from 'react';
import Logo from '../../assets/images/logo_sc.png';
import { Header, Nav, NavMenu, LogoWrapper } from './NavbarStyle';
import { Container } from '../styles/commonStyles';
import { Button, Dropdown, Menu } from 'antd';
import 'antd/dist/antd.css';

const Navbar = () => {
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="#price">
              Price List
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="#shop">
              Shop
            </a>
          ),
        },
      ]}
    />
  );
  return (
    <Header className="header">
      <Nav className="navbar">
        <Container>
          <NavMenu>
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              {/* <a href="#service">Service</a> */}
              <Dropdown overlay={menu} placement="bottomRight" arrow>
                <Button>Service</Button>
              </Dropdown>
            </li>
          </NavMenu>
          <LogoWrapper>
            <a href="#logo">
              <img src={Logo} alt="Logo" />
            </a>
          </LogoWrapper>
          <NavMenu>
            <li className="nav-item">
              <a href="/">Blog</a>
            </li>
            <li className="nav-item">
              <a href="#about">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#service">Contacts</a>
            </li>
          </NavMenu>
        </Container>
      </Nav>
    </Header>
  );
};

export default Navbar;
