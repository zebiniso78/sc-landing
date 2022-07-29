import styled from 'styled-components';
import { mainColours } from '../styles/colors';

export const Header = styled.header`
  background-color: ${mainColours.navBackground};
  position: relative;
  display: block;
  ::selection {
    background-color: ${mainColours.lightYellow};
  }
`;
