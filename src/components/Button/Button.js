import React from 'react';
import { MainButton, MyLinkButton } from './ButtonStyle';

export default function ButtonComp({ onClick, title }) {
  return (
    <>
      <MainButton onClick={onClick}>{title}</MainButton>
    </>
  );
}
