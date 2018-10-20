import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import moment from 'moment';
import OutsideClickHandler from 'react-outside-click-handler';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 60px;
  justify-content: space-evenly;
  z-index: 1;
  background-color: grey;
  border: 1px solid black;
  padding: 1px 10px;
  height: 100px;
  width: 250px;
`;

const StyledEmail = styled.div`
  font-weight: 600;
`;

const StyledDate = styled.div`
  margin-top: 2px;
  flex-wrap: wrap;
`;

const StyledHeadline = styled.h4`
  color: blue;
  margin: 0;
`;

export default function UserLastActivityPopup({
  email,
  lastActivityTime,
  togglePopup
}) {
  const date = moment(lastActivityTime).format('MM/DD/YYYY h:mm a');
  return (
    <OutsideClickHandler {...{ onOutsideClick: togglePopup }}>
      <StyledContainer>
        <StyledHeadline>Last Activity</StyledHeadline>
        <StyledEmail>{`${email}`}</StyledEmail>
        <StyledDate>{`${date}`}</StyledDate>
      </StyledContainer>
    </OutsideClickHandler>
  );
}

UserLastActivityPopup.propTypes = {
  togglePopup: PropTypes.func,
  email: PropTypes.string,
  lastActivityTime: PropTypes.string
};
