import React from 'react';
import {
  SliderWrapper,
  SliderLeft,
  SliderRight,
  SliderFirstElement,
  SliderSecondElement,
  SliderThirdElement,
  SliderFourthElement,
} from './sliderStyle.js';
import './sliderStyle.css';

function Slider() {
  return (
    //  <>
    //    <div className="slider">
    //      <input name="control" id="page1" type="radio" />
    //      <input name="control" id="page2" type="radio" />
    //      <input name="control" id="page3" type="radio" />
    //      <input name="control" id="page4" type="radio" />
    //      <div className="slider--el slider--el-1 anim-4parts">
    //        <div className="slider--el-bg">
    //          <div className="part top left"></div>
    //          <div className="part top right"></div>
    //          <div className="part bot left"></div>
    //          <div className="part bot right"></div>
    //        </div>
    //        <div className="slider--el-content">
    //          <h2 className="slider--el-heading">First slide</h2>
    //        </div>
    //      </div>
    //      <div className="slider--el slider--el-2 anim-9parts">
    //        <div className="slider--el-bg">
    //          <div className="part left-top"></div>
    //          <div className="part mid-top"></div>
    //          <div className="part right-top"></div>
    //          <div className="part left-mid"></div>
    //          <div className="part mid-mid"></div>
    //          <div className="part right-mid"></div>
    //          <div className="part left-bot"></div>
    //          <div className="part mid-bot"></div>
    //          <div className="part right-bot"></div>
    //        </div>
    //        <div className="slider--el-content">
    //          <h2 className="slider--el-heading">Second slide</h2>
    //        </div>
    //      </div>
    //      <div className="slider--el slider--el-3 anim-5parts">
    //        <div className="slider--el-bg">
    //          <div className="part part-1"></div>
    //          <div className="part part-2"></div>
    //          <div className="part part-3"></div>
    //          <div className="part part-4"></div>
    //          <div className="part part-5"></div>
    //        </div>
    //        <div className="slider--el-content">
    //          <h2 className="slider--el-heading">Third slide</h2>
    //        </div>
    //      </div>
    //      <div className="slider--el slider--el-4 anim-3parts">
    //        <div className="slider--el-bg">
    //          <div className="part left"></div>
    //          <div className="part mid"></div>
    //          <div className="part right"></div>
    //        </div>
    //        <div className="slider--el-content">
    //          <h2 className="slider--el-heading">Fourth slide</h2>
    //        </div>
    //      </div>
    //      <div className="slider--control left">
    //        <label className="page1-left" htmlFor="page1"></label>
    //        <label className="page2-left" htmlFor="page2"></label>
    //        <label className="page3-left" htmlFor="page3"></label>
    //        <label className="page4-left" htmlFor="page4"></label>
    //      </div>
    //      <div className="slider--control right">
    //        <label className="page1-right" htmlFor="page1"></label>
    //        <label className="page2-right" htmlFor="page2"></label>
    //        <label className="page3-right" htmlFor="page3"></label>
    //        <label className="page4-right" htmlFor="page4"></label>
    //      </div>
    //    </div>
    //  </>
    <div style={{ backgroundColor: 'red' }}>
      <SliderWrapper className="slider">
        <input name="control" id="page1" type="radio" checked />
        <input name="control" id="page2" type="radio" />
        <input name="control" id="page3" type="radio" />
        <input name="control" id="page4" type="radio" />
        <SliderFirstElement className="slider--el slider--el-1 anim-4parts">
          <div className="slider--el-bg">
            <div className="part top left"></div>
            <div className="part top right"></div>
            <div className="part bot left"></div>
            <div className="part bot right"></div>
          </div>
          <div className="slider--el-content">
            <h2 className="slider--el-heading">First slide</h2>
          </div>
        </SliderFirstElement>
        <SliderSecondElement className="slider--el slider--el-2 anim-9parts">
          <div className="slider--el-bg">
            <div className="part left-top"></div>
            <div className="part mid-top"></div>
            <div className="part right-top"></div>
            <div className="part left-mid"></div>
            <div className="part mid-mid"></div>
            <div className="part right-mid"></div>
            <div className="part left-bot"></div>
            <div className="part mid-bot"></div>
            <div className="part right-bot"></div>
          </div>
          <div className="slider--el-content">
            <h2 className="slider--el-heading">Second slide</h2>
          </div>
        </SliderSecondElement>
        <SliderThirdElement className="slider--el slider--el-3 anim-5parts">
          <div className="slider--el-bg">
            <div className="part part-1"></div>
            <div className="part part-2"></div>
            <div className="part part-3"></div>
            <div className="part part-4"></div>
            <div className="part part-5"></div>
          </div>
          <div className="slider--el-content">
            <h2 className="slider--el-heading">Third slide</h2>
          </div>
        </SliderThirdElement>
        <SliderFourthElement className="slider--el slider--el-4 anim-3parts">
          <div className="slider--el-bg">
            <div className="part left"></div>
            <div className="part mid"></div>
            <div className="part right"></div>
          </div>
          <div className="slider--el-content">
            <h2 className="slider--el-heading">Fourth slide</h2>
          </div>
        </SliderFourthElement>
        <SliderLeft className="slider--control left">
          <label className="page1-left" htmlFor="page1"></label>
          <label className="page2-left" htmlFor="page2"></label>
          <label className="page3-left" htmlFor="page3"></label>
          <label className="page4-left" htmlFor="page4"></label>
        </SliderLeft>
        <SliderRight className="slider--control right">
          <label className="page1-right" htmlFor="page1"></label>
          <label className="page2-right" htmlFor="page2"></label>
          <label className="page3-right" htmlFor="page3"></label>
          <label className="page4-right" htmlFor="page4"></label>
        </SliderRight>
      </SliderWrapper>
    </div>
  );
}

export default Slider;
