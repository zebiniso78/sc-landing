import React from 'react';
import { Section, MyMainTitle } from './AboutTeamStyle';
import { SecondaryTitle } from '../../components/Texts';
import { Container } from '../../components/styles/commonStyles';
import Tab from '../../components/Tabs/Tabs';
// import Button from '../../components/Button/Button';

function AboutTeam() {
  return (
    <>
      <Section>
        <Container>
          <SecondaryTitle >
            WHY CHOOSE SANDBOX?
          </SecondaryTitle>
          <MyMainTitle>
            Here are a few reasons why our customers choose Sandbox.
          </MyMainTitle>
          <Tab />
        </Container>
        {/* <Button to="google.com" title="Hello" /> */}
      </Section>
    </>
  );
}

export default AboutTeam;
