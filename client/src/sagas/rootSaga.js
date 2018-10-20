import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import { actionTypes } from '../actions';
import { SORT_DIRECTION } from '../consts/sort';
import { BASE_URL } from '../consts/url';
import { mapComment } from '../utils/serverClientContractMappers'

const { ASCENDING } = SORT_DIRECTION;

function* filterComments({ payload: { filterValue } }) {
  try {
    const response = yield fetch(
      `${BASE_URL}?email=${filterValue}&sortDirection=${ASCENDING}`
    ).then(res => res.json());;

    if (response.errorMessage) {
      throw new Error(response.errorMessage);
    }

    yield put({
      type: actionTypes.FILTER_COMMENTS.success,
      payload: {
        comments: response.data.map(t => mapComment(t)),
        filterValue
      }
    });
  } catch (e) {
    yield put({
      type: actionTypes.FILTER_COMMENTS.error,
      payload: { errorMessage: e.message }
    });
  }
}

function* submitComment({ payload: { email, message } }) {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({ email, message }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    };

    const response = yield fetch(BASE_URL, options).then(res => res.json());

    if (response.errorMessage) {
      throw new Error(response.errorMessage);
    }

    yield put({
      type: actionTypes.SUBMIT_COMMENT.success,
      payload: mapComment(response.data)
    });
  } catch (e) {
    yield put({
      type: actionTypes.SUBMIT_COMMENT.error,
      payload: { errorMessage: e.message }
    });
  }
}

function* rootSaga() {
  yield takeLatest(actionTypes.FILTER_COMMENTS.pending, filterComments);
  yield takeEvery(actionTypes.SUBMIT_COMMENT.pending, submitComment);
}

export default rootSaga;
