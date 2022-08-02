import styled from 'styled-components';
import { mainColours } from '../styles/colors';

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TabCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;

  .tab {
    width: 24%;
    cursor: pointer;
    margin: 20px 0px;
    display: inline-block;
    color: ${mainColours.mainTitleColour};
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export const TabCardBody = styled.span`
  padding: 16px 12px;
  border-radius: 12px;
  width: 250px;
  display: flex;
  align-items: center;

  img {
    margin-right: 8px;
  }

  h3 {
    font-family: Urbanist, sans-serif;
    font-size: 20px;
    line-height: 20px;
    font-weight: 600;
    color: ${mainColours.mainTitleColour};
    padding: 0;
    margin: 0;
  }

  p {
    font-family: Urbanist, sans-serif;
    font-size: 1.8rem;
    line-height: 2.25rem;
    font-weight: 500;
    color: ${mainColours.mainParagraphColour};
    padding: 0;
    margin: 0;
  }
`;

export const TabPanels = styled.div`
  background: ${mainColours.white};
  width: 100%;
  max-width: 1300px;
  overflow: hidden;
  padding: 20px 0x;

  .panel {
    display: none;
    animation: fadein 0.8s;
    align-items: center !important;
  }
`;

export const TabPanelTextPart = styled.div`
  width: 48% !important;
  box-sizing: border-box;
  display: inline-block;
  h4 {
    font-family: Urbanist, sans-serif;
    font-size: 2.5rem;
    line-height: 1.4rem;
    font-weight: 600;
    color: ${mainColours.mainTitleColour};
    padding: 0;
    margin: 0;
    margin-bottom: 12px;
  }

  p,
  li {
    font-family: Urbanist, sans-serif;
    font-size: 1.8rem;
    line-height: 2.5rem;
    font-weight: 500;
    color: ${mainColours.mainParagraphColour};
    padding: 0;
    margin: 0;
  }
`;
export const TabPanelImgPart = styled.div`
  width: 48% !important;
  box-sizing: border-box;
  display: inline-block;
  margin-left: auto !important;

  img {
    box-sizing: border-box;
    width: 100%;
    height: 290px;
    border-radius: 8px;
  }
`;
