import React from 'react';
import { CardWrapper } from './PersonalCardStyle';

function PersonalCard(props) {
  return (
    <CardWrapper>
      <img src={props.src} alt="Avatar" />
      <h3>{props.fullName}</h3>
      <h4>{props.job}</h4>
      <p>{props.definition}</p>
      <ul></ul>
    </CardWrapper>
  );
}

export default PersonalCard;
