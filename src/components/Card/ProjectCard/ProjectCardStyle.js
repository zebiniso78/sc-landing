import styled from 'styled-components';
import { mainColours } from '../../styles/colors';

export const ProjectCardWrapper = styled.div<{color: 'string'}>`
  flex: 1 1 auto;
  padding: 2rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(164, 174, 198, 0.2);
  border-radius: 0.4rem;

  img {
    width: 2.2rem;
    height: 2.2rem;
    margin-bottom: 0.75rem !important;
    vertical-align: middle;
  }

  h4 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 1.45;
    font-weight: 700;
    color: ${mainColours.mainTitleColour};
    word-spacing: 0.1rem;
    letter-spacing: -0.01rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
    word-spacing: normal;
  }

  a {
    position: relative;
    font-weight: 600;
    letter-spacing: -0.01rem;
    display: inline-block;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    cursor: pointer;
    color:  ${props => props.color};

    &::after {
      content: '';
      position: absolute;
      width: 40%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color:  ${props => props.color};
      transform-origin: bottom right;
      transition: transform 0.5s ease-out;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;
