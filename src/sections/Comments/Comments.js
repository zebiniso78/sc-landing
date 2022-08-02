import React from 'react';
import { SecondaryTitle, MainTitle, Paragraph } from '../../components/Texts';
import { Container, RowBetween } from '../../components/styles/commonStyles';
import { Section } from './CommentsStyle';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

function Comments() {
  return (
    <>
      <Section>
        <Container>
          <RowBetween>
            <div>
              <SecondaryTitle
                style={{
                  width: '100%',
                  textAlign: 'left',
                  marginBottom: '16px',
                }}
              >
                SAVE TIME AND MONEY
              </SecondaryTitle>
              <MainTitle
                style={{
                  width: '100%',
                  textAlign: 'left',
                  marginBottom: '32px',
                }}
              >
                Save your time and money by choosing our professional team.
              </MainTitle>
            </div>

            <ProgressBar />
          </RowBetween>
        </Container>
      </Section>
    </>
  );
}

export default Comments;
