import uniqid from 'uniqid';
import { ADD_TODO, EDIT_TODO, DELETE_TODO } from './actionTypes';

// For Later
// SORT_TODOS
// SEARCH_TODOS

export type TodoItemType = {
  id?: number;
  todoText?: string;
  done: boolean;
};

export type ActionType = {
  type: string;
  payload: TodoItemType;
};

export type StateType = {
  todos: TodoItemType[];
};

const initialState: StateType = {
  todos: [],
};

const reducer = (
  state: StateType = initialState,
  { type, payload }: ActionType
) => {
  switch (type) {
    case ADD_TODO:
      const { todoText } = payload;
      return {
        todos: [
          ...state.todos,
          {
            id: uniqid(),
            todoText,
            done: false,
          },
        ],
      };
    case EDIT_TODO:
      const stateCopy = { ...state };
      const updatedTodos = stateCopy.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, done: payload.done } : todo
      );
      return { ...state, todos: updatedTodos };
    case DELETE_TODO:
      const newState = { ...state };
      const newTodos = newState.todos.filter((todo) => todo.id !== payload.id);
      return { ...state, todos: newTodos };
    default:
      return state;
  }
};

export default reducer;
