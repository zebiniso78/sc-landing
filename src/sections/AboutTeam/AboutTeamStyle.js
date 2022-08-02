import styled from 'styled-components';
import { Container } from '../../components/styles/commonStyles';
import { MainTitle } from '../../components/Texts';

export const Section = styled.section`
  margin: 0;
  padding: 0;
  padding: 100px 0;
`;

export const MyContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

export const MyMainTitle = styled(MainTitle)`
  width: 60%;
`;
