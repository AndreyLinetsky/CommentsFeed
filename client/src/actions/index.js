import { apiRequestActions } from '../utils/apiRequestActions';

export const actionTypes = {
  SUBMIT_COMMENT: apiRequestActions('SUBMIT_COMMENT'),
  FILTER_COMMENTS: apiRequestActions('FILTER_COMMENTS'),
};

export function submitComment({ email, message }) {
  return {
    type: actionTypes.SUBMIT_COMMENT.pending,
    payload: {
      email,
      message
    }
  };
}

export function filterComments({ filterValue }) {
  return {
    type: actionTypes.FILTER_COMMENTS.pending,
    payload: {
      filterValue
    }
  };
}
