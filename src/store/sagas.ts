import { takeEvery, all } from 'redux-saga/effects';
import { ADD_TODO } from './actionTypes';
import db from '../firebase';

// Worker Sagas
export function* todoAdded() {
  //yield takeLatest({ type: ADD_TODO, payload: todoItem });
  console.log('TODO ADDED');
  console.log(db);
}

// Watcher Sagas
export default function* rootSaga() {
  yield all([takeEvery(ADD_TODO, todoAdded)]);
}
