import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import CommentItem from './CommentItem';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-bottom: 0;
  margin-top: 15px;
`;

export default function CommentsList({ comments }) {  
  return (
    <StyledList>
      {comments.map((comment, key) => (
        <CommentItem {...{ key, comment }} />
      ))}
    </StyledList>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.array
};
