import { actionTypes } from '../actions';

export const initialState = {
  comments: [],
  lastFilterValue: '',
  submitCommentErrorMessage: '',
  filterCommentsErrorMessage: ''
};

function addComment(state, payload) {
  const { lastFilterValue } = state;
  const { email, message } = payload;
  const shouldAddCommentToFilteredResults =
    !lastFilterValue ||
    email.toLowerCase().includes(lastFilterValue.toLowerCase());

  if (shouldAddCommentToFilteredResults) {
    return {
      ...state,
      comments: [...state.comments, { email, message }],
      submitCommentErrorMessage: ''
    };
  }
  return { ...state, submitCommentErrorMessage: '' };
}

function setSubmitCommentErrorMessage(state, payload) {
  return {
    ...state,
    submitCommentErrorMessage: payload.errorMessage
  };
}

function setComments(state, payload) {
  const { filterValue, comments } = payload;
  return {
    ...state,
    comments: comments,
    lastFilterValue: filterValue,
    filterCommentsErrorMessage: ''
  };
}

function setFilterCommentsErrorMessage(state, payload) {
  return {
    ...state,
    filterCommentsErrorMessage: payload.errorMessage
  };
}

const commentFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_COMMENT.success:
      return addComment(state, action.payload);
    case actionTypes.SUBMIT_COMMENT.error:
      return setSubmitCommentErrorMessage(state, action.payload);
    case actionTypes.FILTER_COMMENTS.success:
      return setComments(state, action.payload);
    case actionTypes.FILTER_COMMENTS.error:
      return setFilterCommentsErrorMessage(state, action.payload);   
    default:
      return state;
  }
};

export default commentFeedReducer;
