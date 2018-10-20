import React from 'react';
import { connect } from 'react-redux';
import { getUserLastActivityTime } from '../utils/userLastActivity'
import PropTypes from 'prop-types';
import { getCommentsSelector } from '../selectors/commentFeedSelector';
import UserLastActivityPopup from '../components/comments/UserLastActivityPopup';

function mapStateToProps(state) {
  return {
    comments: getCommentsSelector(state)
  };
}

function UserLastActivityPopupContainer({ comments, togglePopup, email }) {
  const lastActivityTime = getUserLastActivityTime(comments, email);
  const popupProps = {
    togglePopup,
    email,
    lastActivityTime
  };
  return <UserLastActivityPopup {...popupProps} />;
}

export default connect(
  mapStateToProps
)(UserLastActivityPopupContainer);

UserLastActivityPopupContainer.propTypes = {
  email: PropTypes.string,
  togglePopup: PropTypes.func
};
