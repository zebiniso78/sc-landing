import React from 'react';
import { MainButton } from './ButtonStyle';

function Button(props) {
  return (
    <>
      <MainButton >{props.title}</MainButton>
    </>
  );
}

export default Button;
