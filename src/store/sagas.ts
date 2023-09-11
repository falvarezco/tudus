import { takeEvery, all } from 'redux-saga/effects';
import { ADD_TODO } from './actionTypes';
/*import { TodoItemType } from './reducer';*/

// Worker Sagas
export function* todoAdded() {
  //yield takeLatest({ type: ADD_TODO, payload: todoItem });
  console.log('TODO ADDED');
}

// Watcher Sagas
export default function* rootSaga() {
  yield all([takeEvery(ADD_TODO, todoAdded)]);
}
