import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import Gravatar from './Gravatar';
import EmailAndMessagePanel from './EmailAndMessagePanel';

const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin: 10px 0;  
  position: relative;
`;

export default function CommentItem({ comment }) {
  const { email } = comment;
  return (
    <StyledListItem>
      <Gravatar {...{ email }} />
      <EmailAndMessagePanel {...comment} />
    </StyledListItem>
  );
}

CommentItem.propTypes = {
  comment: PropTypes.object
};
