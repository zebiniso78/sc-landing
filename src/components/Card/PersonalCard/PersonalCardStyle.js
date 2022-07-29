import styled from 'styled-components';
import { mainColours } from '../../styles/colors';

export const CardWrapper = styled.div`
  padding: 2rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
  box-sizing: border-box;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(164, 174, 198, 0.2);
  border-radius: 0.4rem;

  img {
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    vertical-align: middle;
    margin-bottom: 1rem !important;
  }

  h3 {
    font-size: 1.2rem;
    line-height: 1.45;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 700;
    color: ${mainColours.mainTitleColour};
    word-spacing: 0.1rem;
    letter-spacing: -0.01rem;
  }

  h4 {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.02rem;
    font-weight: 600;
    color: ${mainColours.secondaryTitleColour};
    margin-bottom: 0.5rem;
  }

  p {
    display: block;
    margin-bottom: 0.5rem;
    word-spacing: normal;
    font-size: 1rem;
    font-weight: 400;
    color: ${mainColours.mainParagraphColour};
  }
`;
