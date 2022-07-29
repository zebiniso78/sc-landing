import React from 'react';
import { ProjectCardWrapper } from './ProjectCardStyle';

function ProjectCard(props) {
  return (
    <ProjectCardWrapper>
      <img src={props.src} alt="Avatar" />
      <h4>{props.projectName}</h4>
      <p>{props.definition}</p>
      <a href={props.learnMore}>Learn More...</a> 
      {/* //add props.color */}
    </ProjectCardWrapper>
  );
}

export default ProjectCard;
