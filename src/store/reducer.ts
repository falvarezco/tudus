import { RETRIEVAL_SUCCESS, LOADING_APP } from './actionTypes';
// For Later
// SORT_TODOS
// SEARCH_TODOS

type AppActions = ActionType;

export type TodoItemType = {
  id: string;
  todoText?: string;
  done: boolean;
};

export interface ActionType {
  type: string;
  payload: object;
}


export type StateType = {
  loading: boolean,
  todos: TodoItemType[];
};

const initialState: StateType = {
  loading: false,
  todos: [],
};
/*eslint-disable @typescript-eslint/no-explicit-any*/
const reducer = (
  state: StateType = initialState,
  { type, payload }: AppActions,
): any => {
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
