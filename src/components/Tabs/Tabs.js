import React from 'react';
import './tabStyle.css';
import {
  TabWrapper,
  TabCard,
  TabCardBody,
  TabPanels,
  TabPanelTextPart,
  TabPanelImgPart,
} from './TabStyle';
import { RowBetween } from '../styles/commonStyles';
import Facebook from '../../assets/icons/facebook.svg';
import Analytics from '../../assets/images/analytics.png';
import Designers from '../../assets/images/designers.png';
import Frontenders from '../../assets/images/coding1.jpg';
import Backenders from '../../assets/images/coding2.jpg';
import ButtonComp from '../Button/Button';
import { useHistory } from 'react-router-dom';
function Tab() {
  const history = useHistory();

  return (
    <TabWrapper>
      <input className="radio" id="one" name="group" type="radio" checked />
      <input className="radio" id="two" name="group" type="radio" checked />
      <input className="radio" id="three" name="group" type="radio" checked />
      <input className="radio" id="four" name="group" type="radio" checked />

      <TabCard>
        <label className="tab" id="one-tab" htmlFor="one">
          <TabCardBody className="tab-wrapper">
            <img src={Facebook} alt="Tab" />
            <span>
              {/* <ButtonComp onClick={() => history.push('/')} title="salom" /> */}
              <h3>Project Analytics</h3>
            </span>
          </TabCardBody>
        </label>

        <label className="tab" id="two-tab" htmlFor="two">
          <TabCardBody className="tab-wrapper">
            <img src={Facebook} alt="Tab" />
            <div>
              <h3>Project Designers</h3>
            </div>
          </TabCardBody>
        </label>
        <label className="tab" id="three-tab" htmlFor="three">
          <TabCardBody className="tab-wrapper">
            <img src={Facebook} alt="Tab" />
            <div>
              <h3>Frontend Developers</h3>
            </div>
          </TabCardBody>
        </label>
        <label className="tab" id="four-tab" htmlFor="four">
          <TabCardBody className="tab-wrapper">
            <img src={Facebook} alt="Tab" />
            <div>
              <h3>Backend Developers</h3>
            </div>
          </TabCardBody>
        </label>
      </TabCard>

      <TabPanels className="panels">
        <div className="panel" id="one-panel">
          <TabPanelTextPart>
            <h4 className="panel-title">Project Analytics</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              ducimus qui tempore praesentium nihil! Delectus omnis rerum
              aspernatur nulla! Perspiciatis eligendi ab consectetur rem, sed
              esse temporibus atque non doloribus laudantium nihil earum
              recusandae qui nulla numquam in alias doloremque!
            </p>
            <ul style={{ marginTop: '16px' }}>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </TabPanelTextPart>
          <TabPanelImgPart>
            <img src={Analytics} alt="Analytics" />
          </TabPanelImgPart>
        </div>
        <div className="panel" id="two-panel">
          <TabPanelTextPart>
            <h4 className="panel-title">Project Designers</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              ducimus qui tempore praesentium nihil! Delectus omnis rerum
              aspernatur nulla! Perspiciatis eligendi ab consectetur rem, sed
              esse temporibus atque non doloribus laudantium nihil earum
              recusandae qui nulla numquam in alias doloremque!
            </p>
            <ul style={{ marginTop: '16px' }}>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </TabPanelTextPart>
          <TabPanelImgPart>
            <img src={Designers} alt="Designers" />
          </TabPanelImgPart>
        </div>
        <div className="panel" id="three-panel">
          <TabPanelTextPart>
            <h4 className="panel-title">Frontend Developers</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              ducimus qui tempore praesentium nihil! Delectus omnis rerum
              aspernatur nulla! Perspiciatis eligendi ab consectetur rem, sed
              esse temporibus atque non doloribus laudantium nihil earum
              recusandae qui nulla numquam in alias doloremque!
            </p>
            <ul style={{ marginTop: '16px' }}>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </TabPanelTextPart>
          <TabPanelImgPart>
            <img src={Frontenders} alt="Designers" />
          </TabPanelImgPart>
        </div>
        <div className="panel" id="four-panel">
          <TabPanelTextPart>
            <h4 className="panel-title">Backend Developers</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              ducimus qui tempore praesentium nihil! Delectus omnis rerum
              aspernatur nulla! Perspiciatis eligendi ab consectetur rem, sed
              esse temporibus atque non doloribus laudantium nihil earum
              recusandae qui nulla numquam in alias doloremque!
            </p>
            <ul style={{ marginTop: '16px' }}>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </TabPanelTextPart>
          <TabPanelImgPart>
            <img src={Backenders} alt="Analytics" />
          </TabPanelImgPart>
        </div>
      </TabPanels>
    </TabWrapper>
  );
}

export default Tab;
