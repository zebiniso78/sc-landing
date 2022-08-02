import styled from 'styled-components';
import { mainColours } from './styles/colors';

export const MainTitle = styled.h1`
  font-style: normal;
  font-family: 'Urbanist', sans-serif
  font-weight: 400;
  font-size: 42px;
  line-height: 1.15;
  margin: 0;
  padding: 0;
  color: ${mainColours.mainTitleColour};
  text-align:center;
  margin:0 auto;
  margin-bottom: 32px;
`;

export const SecondaryTitle = styled.h2`
font-style: normal;
font-family: 'Urbanist', sans-serif
font-weight: 400;
font-size: 16px;
text-align: center;
letter-spacing: .2rem;
text-transform: uppercase;
margin-bottom: 16px;
margin: 0;
padding: 0;
color: ${mainColours.secondaryTitleColour};`;

export const Paragraph = styled.p`
  font-style: normal;
  font-family: 'Urbanist', sans-serif
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.55;
  margin: 0;
  padding: 0;
  color: ${mainColours.mainParagraphColour};
`;
