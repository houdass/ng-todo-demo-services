import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from '../todo.model';
import * as fromTodoReducer from '../todo.reducer';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  todoState$: Observable<fromTodoReducer.State>;
  isEdit = false;
  newTodo: string;
  index: number;
  selectedTodo: Todo;

  constructor(private store: Store<fromTodoReducer.State>) {}

  ngOnInit(): void {
    this.todoState$ = this.store.pipe(select('todo'));
  }

  addTodo(): void {
    const todo: Todo = new Todo(this.newTodo);
    this.store.dispatch(new todoActions.AddTodo(todo));
  }

  updateTodo(index: number, todo: Todo): void {
    this.isEdit = true;
    this.newTodo = todo.name;
    this.selectedTodo = todo;
    this.index = index;
  }

  confirmTodo(newTodoInput: string): void {
    this.selectedTodo.name = newTodoInput;
    this.store.dispatch(new todoActions.UpdateTodo({ id: this.index, updatedTodo: this.selectedTodo }));
    this.isEdit = false;
    this.newTodo = '';
  }

  deleteTodo(index: number): void {
    this.store.dispatch(new todoActions.DeleteTodo(index));
  }
}
