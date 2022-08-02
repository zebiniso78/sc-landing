import styled from 'styled-components';

export const SliderWrapper = styled.div`
  &.slider {
    // position: relative;
    height: 100vh;
  }

  // .slider--control {
  //   z-index: 50;
  //   position: absolute;
  //   top: calc(50% - 2rem);
  //   width: 4rem;
  //   height: 4rem;
  //   cursor: pointer;
  //   background: rgba(255, 255, 255, 0.5);
  //   border-radius: 50%;
  // }
`;

export const SliderRight = styled.div`
  &.slider-control {
    z-index: 50;
    position: absolute;
    top: calc(50% - 2rem);
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
  }

  &.slider--control.right {
    right: 4rem;
  }

  label {
    z-index: 2000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transform: scale(0);
    transition: transform 0s 0s;
  }
`;

export const SliderLeft = styled.div`
  &.slider-control {
    z-index: 50;
    position: absolute;
    top: calc(50% - 2rem);
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
  }

  & .slider--control.left {
    left: 4rem;
  }

  label {
    z-index: 2000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transform: scale(0);
    transition: transform 0s 0s;
  }
`;

export const SliderFirstElement = styled.div`
  &.slider--el {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 2.8s, z-index 0.1s;
    overflow: hidden;
  }

  .slider--el-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20rem;
    transition: opacity 0.3s;
    opacity: 0;
  }

  .slider--el-heading {
    font-size: 9rem;
    font-family: Tesla;
    text-transform: uppercase;
    color: #000;
  }

  .slider--el-bg {
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    background-size: cover;
    transition: transform 1s 1.5s;
    will-change: transform;
  }

  &.slider--el.anim-4parts .part {
    position: absolute;
    width: 50.2%;
    height: 50.2%;
    overflow: hidden;
    will-change: transform;
    &::before {
      content: '';
      display: block;
      position: absolute;
      background-size: cover;
      width: 200%;
      height: 200%;
      background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/slider-4.jpg');
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.15);
    }
  }

  .part.top {
    top: 0;
    transition: transform 1.3s 0.3s;
    &::before {
      top: 0;
    }
  }

  .part.bot {
    top: 50%;
    transition: transform 1.3s 0.5s;
    &::before {
      top: -100%;
    }
  }

  &.slider--el.anim-4parts .part.left {
    left: 0;
    &::before {
      left: 0;
    }
  }

  .part.right {
    left: 50%;
    &::before {
      left: -100%;
    }
  }

  .left {
    transform: translateX(-100%);
  }

  .right {
    transform: translateX(100%);
  }
`;

export const SliderSecondElement = styled.div`
  &.slider--el {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 2.8s, z-index 0.1s;
    overflow: hidden;
  }

  .slider--el-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20rem;
    transition: opacity 0.3s;
    opacity: 0;
  }

  .slider--el-heading {
    font-size: 9rem;
    font-family: Tesla;
    text-transform: uppercase;
    color: #000;
  }

  .slider--el-bg {
    perspective: 2000;
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    background-size: cover;
    transition: transform 1s 1.5s;
    will-change: transform;
  }

  &slider--el.anim-9parts .part {
    position: absolute;
    width: 33.5%;
    height: 33.5%;
    overflow: hidden;
    will-change: transform;
    transform-origin: 0% 100%;

    &::before {
      content: '';
      display: block;
      position: absolute;
      background-size: cover;
      width: 300%;
      height: 300%;
      background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/slider-2.jpg');
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.15);
    }
  }

  .part.left-top {
    top: 0%;
    left: 0%;
    transition: transform 0.9s 0.5s cubic-bezier(0.58, -0.7, 0.59, 0.95),
      opacity 0.6s 0.9s;
    &::before {
      top: 0%;
      left: 0%;
    }
  }

  .part.mid-top {
    top: 0%;
    left: 33.33333%;
    transition: transform 0.9s 0.4s cubic-bezier(0.58, -0.7, 0.59, 0.95),
      opacity 0.6s 0.8s;
    &::before {
      top: 0%;
      left: -100%;
    }
  }

  .part.right-top {
    top: 0%;
    left: 66.66667%;
    transition: transform 0.9s 0.5s cubic-bezier(0.58, -0.7, 0.59, 0.95),
      opacity 0.6s 0.9s;
    &::before {
      top: 0%;
      left: -200%;
    }
  }

  .part.left-mid {
    top: 33.33333%;
    left: 0%;
    transition: transform 0.9s 0.6s cubic-bezier(0.58, -0.7, 0.59, 0.95),
      opacity 0.6s 1s;
    &::before {
      top: -100%;
      left: 0%;
    }
  }

  .part.mid-mid {
    top: 33.33333%;
    left: 33.33333%;
    transition: transform 0.9s 0.3s cubic-bezier(0.58, -0.7, 0.59, 0.95),
      opacity 0.6s 0.7s;
    &::before {
      top: -100%;
      left: -100%;
    }
  }

  .part.right-mid {
    top: 33.33333%;
    left: 66.66667%;
    transition: transform 0.9s 0.6s cubic-bezier(0.58, -0.7, 0.59, 0.95),
      opacity 0.6s 1s;
    &::before {
      top: -100%;
      left: -200%;
    }
  }

  .part.left-bot {
    top: 66.66667%;
    left: 0%;
    transition: transform 0.9s 0.7s cubic-bezier(0.58, -0.7, 0.59, 0.95),
      opacity 0.6s 1.1s;
    &::before {
      top: -200%;
      left: 0%;
    }
  }

  .part.mid-bot {
    top: 66.66667%;
    left: 33.33333%;
    transition: transform 0.9s 0.8s cubic-bezier(0.58, -0.7, 0.59, 0.95),
      opacity 0.6s 1.2s;
    &::before {
      top: -200%;
      left: -100%;
    }
  }

  .part.right-bot {
    top: 66.66667%;
    left: 66.66667%;
    transition: transform 0.9s 0.7s cubic-bezier(0.58, -0.7, 0.59, 0.95),
      opacity 0.6s 1.1s;
    &::before {
      top: -200%;
      left: -200%;
    }
  }

  &.slider--el.anim-9parts .part {
    transform: rotateX(90deg);
    opacity: 0;
  }
`;

export const SliderThirdElement = styled.div`
  &.slider--el {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 2.8s, z-index 0.1s;
    overflow: hidden;
  }

  .slider--el-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20rem;
    transition: opacity 0.3s;
    opacity: 0;
  }

  .slider--el-heading {
    font-size: 9rem;
    font-family: Tesla;
    text-transform: uppercase;
    color: #000;
  }

  .slider--el-bg {
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    background-size: cover;
    transition: transform 1s 1.5s;
    will-change: transform;
  }

  &slider--el.anim-5parts .part {
    position: absolute;
    top: 0;
    width: 20.1%;
    height: 100%;
    overflow: hidden;
    will-change: transform;

    &::before {
      content: '';
      display: block;
      position: absolute;
      background-size: cover;
      top: 0;
      width: 500%;
      height: 100%;
      background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/slider-1.jpg');
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.15);
    }
  }

  .part.part-1 {
    transition: transform 1.1s 0.3s;
    left: 0%;

    &::before {
      left: 0%;
    }
  }

  .part.part-2 {
    transition: transform 1.1s 0.5s;
    left: 20%;

    &::before {
      left: -100%;
    }
  }

  .part.part-3 {
    transition: transform 1.1s 0.7s;
    left: 40%;
    &::before {
      left: -200%;
    }
  }

  .part.part-4 {
    transition: transform 1.1s 0.5s;
    left: 60%;

    &:before {
      left: -300%;
    }
  }

  .part.part-5 {
    transition: transform 1.1s 0.3s;
    left: 80%;
    &::before {
      left: -400%;
    }
  }

  .part {
    transform: translateY(100%);
  }
`;

export const SliderFourthElement = styled.div`
  &.slider--el {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 2.8s, z-index 0.1s;
    overflow: hidden;
  }

  .slider--el-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20rem;
    transition: opacity 0.3s;
    opacity: 0;
  }

  .slider--el-heading {
    font-size: 9rem;
    font-family: Tesla;
    text-transform: uppercase;
    color: #000;
  }

  .slider--el-bg {
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    background-size: cover;
    transition: transform 1s 1.5s;
    will-change: transform;
  }

  &.slider--el.anim-3parts .part {
    position: absolute;
    top: 0;
    width: 33.5%;
    height: 100%;
    overflow: hidden;
    transition: transform 1.5s 0.3s;
    will-change: transform;
    &::before {
      content: '';
      display: block;
      position: absolute;
      background-size: cover;
      width: 300%;
      height: 100%;
      background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/slider-3.jpg');
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.15);
    }
  }

  .part.left {
    left: 0;
    &::before {
      left: 0;
    }
  }

  .part.mid {
    left: 33.33333%;
    &::before {
      left: -100%;
    }
  }

  .part.right {
    left: 66.66667%;
    &::before {
      left: -200%;
    }
  }

  .left {
    transform: translate3D(-100%, -33.333%, 0);
  }

  .mid {
    transform: translate3D(0, 100%, 0);
  }

  .right {
    transform: translate3D(100%, -33.333%, 0);
  }
`;

// html,
// body {
//   font-size: 62.5%;
//   height: 100%;
//   overflow: hidden;
// }

// button,
// input {
//   outline: none;
//   border: none;
// }
