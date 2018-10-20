import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SubmitCommentForm from '../components/submitComment/SubmitCommentForm';
import { getSubmitCommentErrorMessageSelector } from '../selectors/commentFeedSelector';

function mapStateToProps(state) {
  return {
    submitCommentErrorMessage: getSubmitCommentErrorMessageSelector(state)
  };
}

function SubmitCommentContainer({ submitComment, submitCommentErrorMessage }) {
  return <SubmitCommentForm {...{ submitComment, submitCommentErrorMessage }} />;
}

export default connect(
  mapStateToProps,
  actions
)(SubmitCommentContainer);
