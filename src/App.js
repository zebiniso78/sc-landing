import React from 'react';
import { MainTitle, SecondaryTitle, Paragraph } from './components/Texts';
import { Container } from './components/styles/commonStyles';
import Button from './components/Button/Button';
import ProjectCard from './components/Card/ProjectCard/ProjectCard';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Container>
        {/* <MainTitle>Hello</MainTitle>
        <Paragraph>Sooooooo</Paragraph>
        <SecondaryTitle>Again here</SecondaryTitle>
        <Button title="Click here" />
        <Button title="Click here pleasee" />
        <PersonalCard
          src="https://picsum.photos/200/300"
          fullName="John Doe"
          job="Fullstack developer"
          definition="Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi sequi totam?"
        /> */}

        {/* <ul style={{ display: 'flex' }}>
          <li>
            <ProjectCard
              src="https://picsum.photos/200/300"
              projectName="Smart Campus"
              definition="Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi sequi totam?"
            />
          </li>
          <li>
            <ProjectCard
              src="https://picsum.photos/200/300"
              projectName="Smart Campus"
              definition="Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi sequi totam?"
            />
          </li>
          <li>
            <ProjectCard
              src="https://picsum.photos/200/300"
              projectName="Smart Campus"
              definition="Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi sequi totam?"
            />
          </li>
          <li>
            <ProjectCard
              src="https://picsum.photos/200/300"
              projectName="Smart Campus"
              definition="Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi sequi totam?"
            />
          </li>
        </ul> */}
        <Slider />
      </Container>
    </div>
  );
}

export default App;
