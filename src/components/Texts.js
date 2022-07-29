import styled from 'styled-components';
import { mainColours } from './styles/colors';

export const MainTitle = styled.h1`
  font-style: normal;
  font-family: 'Urbanist', sans-serif
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 1.15;
  margin: 0;
  padding: 0;
  color: ${mainColours.mainTitleColour};
`;

export const SecondaryTitle = styled.h2`
font-style: normal;
font-family: 'Urbanist', sans-serif
font-weight: 600;
font-size: 0.8rem;
letter-spacing: .02rem;
text-transform: uppercase;
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
