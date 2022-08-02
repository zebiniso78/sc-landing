import styled from 'styled-components';
import { mainColours } from '../styles/colors';
import { Container } from '../styles/commonStyles';

export const Header = styled.header`
  &.header {
    position: fixed;
    // height: 60px;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.5s ease-in;
    overflow: hidden;
    background-color: ${mainColours.mainBlue};
    display: flex;
    justify-content: center;
    padding-top: 12px;
    padding-bottom: 4px;
  }
`;

export const Nav = styled.nav`
  }
  ${Container} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavMenu = styled.ul`
  display: flex;

  li {
    box-sizing: border-box;
    width: 32%;
    padding: 0 20px;

    a {
      text-decoration: none;
      font-size: 18px;
      font-family: Urbanist, sand-serif;
      font-weight: 600;
      color: ${mainColours.white};
    }

    .ant-btn.ant-btn-default.ant-dropdown-trigger {
      background: transparent;
      border: none;
      margin: 0;
      padding: 0;
      font-size: 18px;
      font-family: Urbanist, sand-serif;
      font-weight: 600;
      color: ${mainColours.white};
    }

    
  }
`;

export const LogoWrapper = styled.div`
  margin: 0 32px;
`;
