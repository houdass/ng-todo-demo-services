import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Todo } from './todo.model';
import { TodoActions, TodoActionsTypes } from './todo.actions';

export interface State extends EntityState<Todo> {
  lastUpdate: string;
}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

const defaultTodos: any = {
  ids: [0, 1],
  entities: {
    0: new Todo(0, 'Learn Angular'),
    1: new Todo(1, 'Learn Java')
  },
  updateDate: new Date().toString()
};

const initialState: State = todoAdapter.getInitialState(defaultTodos);

export function todoReducer(state: State = initialState, action: TodoActions) {
  switch (action.type) {
    case TodoActionsTypes.ADD_TODO:
      return todoAdapter.addOne(action.payload, {
        ...state,
        updateDate: new Date().toString()
      });
    case TodoActionsTypes.UPDATE_TODO:
      return todoAdapter.updateOne(action.payload.todo, {
        ...state,
        updateDate: new Date().toString()
      });
    case TodoActionsTypes.DELETE_TODO:
      return todoAdapter.removeOne(action.payload, {
        ...state,
        updateDate: new Date().toString()
      });
    case TodoActionsTypes.DELETE_ALL_TODOS:
      return todoAdapter.removeAll({
        ...state,
        updateDate: new Date().toString()
      });
    default:
      return state;
  }
}
