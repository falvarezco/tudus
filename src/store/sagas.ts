import {
  takeEvery,
  all,
  put,
  call,
} from 'redux-saga/effects';
import { 
  ADD_TODO,
  TODOS_REQUESTED,
  RETRIEVAL_SUCCESS,
  LOADING_APP,
  DELETE_TODO,
  EDIT_TODO,
} from './actionTypes';
import {
  getDocuments,
  addDocument,
  deleteDocument,
  updateDocument,
} from './api';
import { TodoItemType, ActionType } from './reducer';

// Worker Sagas
export function* todosRequested() {
  yield put({ type: LOADING_APP, payload: true });
  try {
    let todos: TodoItemType[] = [];
    const docs = yield call(getDocuments)
    console.log(docs)
    if (docs) {
      docs.forEach((item) => {
        todos.push({  ...item.data(), id: item.id } as TodoItemType);
      });
      yield put({ type: RETRIEVAL_SUCCESS, payload: todos });
      yield put({ type: LOADING_APP, payload: false });
    }
    todos = [];
  } catch(e) {
    console.error(e)
    yield put({ type: LOADING_APP, payload: false });
  }
}

export function* addTodo(action: ActionType) {
  const { payload } = action;
  try {
    yield call(addDocument, payload);
    yield put({type: TODOS_REQUESTED})
  } catch(e) {
    console.error(e)
  }
}

export function* deleteTodo(action: ActionType) {
  const { payload } = action;
  try {
    yield call(deleteDocument, payload);
    yield put({type: TODOS_REQUESTED})
  } catch(e) {
    console.error(e)
  }
}

export function* updateTodo(action: ActionType) {
  const { payload } = action;
  try {
    yield call(updateDocument, payload);
    yield put({type: TODOS_REQUESTED})
  } catch(e) {
    console.error(e)
  }
}

// Watcher Sagas
export default function* rootSaga() {
  yield all([
    takeEvery(TODOS_REQUESTED, todosRequested),
    takeEvery(ADD_TODO, addTodo),
    takeEvery(DELETE_TODO, deleteTodo),
    takeEvery(EDIT_TODO, updateTodo),
  ]);
}
