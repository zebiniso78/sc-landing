import styled from 'styled-components';
import { mainColours } from '../styles/colors';
import { Link } from 'react-router-dom';

export const MainButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  line-height: 1.7;
  letter-spacing: -0.01rem;
  font-size: 0.8rem;
  word-spacing: normal;
  color: ${mainColours.white};
  background-color: ${mainColours.mainYellow};
  border: 2px solid ${mainColours.mainYellow};
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  transform: translateY(1.12);
  padding: 0.5rem 1.2rem;
  border-radius: 50rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-0.15rem);
    box-shadow: 0 0.25rem 0.75rem rgb(30 34 40 / 15%);
  }
  &:focus {
    outline: 0;
  }
`;

export const MyLinkButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  line-height: 1.7;
  letter-spacing: -0.01rem;
  font-size: 0.8rem;
  word-spacing: normal;
  color: ${mainColours.white};
  background-color: ${mainColours.mainYellow};
  border: 2px solid ${mainColours.mainYellow};
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  transform: translateY(1.12);
  padding: 0.5rem 1.2rem;
  border-radius: 50rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-0.15rem);
    box-shadow: 0 0.25rem 0.75rem rgb(30 34 40 / 15%);
  }
  &:focus {
    outline: 0;
  }
`;
