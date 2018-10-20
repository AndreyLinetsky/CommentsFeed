import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: auto;
`;

const StyledEmail = styled.div`
  font-weight: 600;
`;

const StyledMessage = styled.div`
  opacity: 0.5;
  margin-top: 2px;
  flex-wrap: wrap;
`;

export default function EmailAndMessagePanel({ email, message }) {
  return (
    <StyledPanel>
      <StyledEmail>{email}</StyledEmail>
      <StyledMessage>{message}</StyledMessage>
    </StyledPanel>
  );
}

EmailAndMessagePanel.propTypes = {
  email: PropTypes.string,
  message: PropTypes.string
};
