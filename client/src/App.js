import React from 'react';
import styled from 'styled-components';
import SubmitCommentContainer from './containers/SubmitCommentContainer';
import CommentsContainer from './containers/CommentsContainer';
import { GlobalStyle } from './styles/appDefaultStyles';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  width: 350px;
`;

export default function App() {
  return (
    <StyledContainer>
      <GlobalStyle />
      <SubmitCommentContainer />
      <CommentsContainer />
    </StyledContainer>
  );
}
