import { createSelector } from 'reselect';

const submitCommentErrorMessageSelector = state =>
  state.submitCommentErrorMessage;
export const getSubmitCommentErrorMessageSelector = createSelector(
  submitCommentErrorMessageSelector,
  submitCommentErrorMessage => submitCommentErrorMessage
);

const filterCommentsErrorMessageSelector = state =>
  state.filterCommentsErrorMessage;
export const getFilterCommentsErrorMessageSelector = createSelector(
  filterCommentsErrorMessageSelector,
  filterCommentsErrorMessage => filterCommentsErrorMessage
);

const commentsSelector = state => state.comments;
export const getCommentsSelector = createSelector(
  commentsSelector,
  comments => comments
);

const filterValueSelector = state => state.filterValue;
export const getFilterValueSelector = createSelector(
  filterValueSelector,
  filterValue => filterValue
);
