// import uniqid from 'uniqid';
import { RETRIEVAL_SUCCESS, LOADING_APP } from './actionTypes';

// For Later
// SORT_TODOS
// SEARCH_TODOS

export type TodoItemType = {
  id: string;
  todoText?: string;
  done: boolean;
};

export type ActionType = {
  type: string;
  payload: TodoItemType;
};

export type StateType = {
  loading: boolean,
  todos: TodoItemType[];
};

const initialState: StateType = {
  loading: false,
  todos: [],
};

const reducer = (
  state: StateType = initialState,
  { type, payload }: ActionType
) => {
  switch (type) {
    case LOADING_APP:
      return {
        ...state,
        loading: payload,
      }
    case RETRIEVAL_SUCCESS:
      return {
        ...state,
        todos: payload,
      };
    default:
      return state;
  }
};

export default reducer;
