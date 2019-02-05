import { Todo } from './todo.model';
import { TodoActions, TodoActionsTypes } from './todo.actions';

export interface State {
  todos: Array<Todo>;
  lastUpdate: string;
}

const initialState: State = {
  todos: [new Todo('Learn Java'), new Todo('Learn Angular')],
  lastUpdate: new Date().toString()
};

export function todoReducer(state: State = initialState, action: TodoActions) {
  switch (action.type) {
    case TodoActionsTypes.ADD_TODO:
      return {
        ...state,
        lastUpdate: new Date().toString(),
        todos: [...state.todos, action.payload]
      };
    case TodoActionsTypes.UPDATE_TODO:
      const todo: Todo = state.todos[action.payload.id];
      const updatedTodo: any = {
        todo,
        ...action.payload.updatedTodo
      };
      const todos: Array<Todo> = [...state.todos];
      todos[action.payload.id] = updatedTodo;
      return {
        ...state,
        lastUpdate: new Date().toString(),
        todos: todos
      };
    case TodoActionsTypes.DELETE_TODO:
      const oldTodos: Todo[] = [...state.todos];
      oldTodos.splice(action.payload, 1);
      return {
        ...state,
        lastUpdate: new Date().toString(),
        todos: oldTodos
      };
    case TodoActionsTypes.DELETE_ALL_TODOS:
      return {
        ...state,
        lastUpdate: new Date().toString(),
        todos: []
      };
    default:
      return state;
  }
}
