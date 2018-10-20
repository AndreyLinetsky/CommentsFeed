import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import GravatarPanel from './GravatarPanel';
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
      <GravatarPanel {...{ email }} />
      <EmailAndMessagePanel {...comment} />
    </StyledListItem>
  );
}

CommentItem.propTypes = {
  comment: PropTypes.object
};
