import React from 'react';
import './progressBarStyle.scss';

function ProgressBar() {
  return (
    <div class="container__progressbars">
      <div>
        <div class="progressbar">
          <svg class="progressbar__svg">
            <circle
              cx="80"
              cy="80"
              r="70"
              class="progressbar__svg-circle circle-html shadow-html"
            ></circle>
          </svg>
          <span class="progressbar__text shadow-html">95%</span>
        </div>
        <p className="progressbar__title">Customer satisfaction</p>
      </div>

      <div className="progressbar__wrapper">
        <div class="progressbar">
          <svg class="progressbar__svg">
            <circle
              cx="80"
              cy="80"
              r="70"
              class="progressbar__svg-circle circle-css shadow-css"
            >
              {' '}
            </circle>
          </svg>
          <span class="progressbar__text shadow-css">80%</span>
        </div>
        <p className="progressbar__title">Increased Revenue</p>
      </div>
    </div>
  );
}

export default ProgressBar;
