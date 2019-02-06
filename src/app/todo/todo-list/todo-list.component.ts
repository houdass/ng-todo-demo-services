import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from '../todo.model';
import * as fromTodoReducer from '../todo.reducer';
import * as fromTodoActions from '../todo.actions';
import * as fromTodoSelectors from '../todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Array<Todo>>;
  isEdit = false;
  newTodo: string;
  index: number;
  selectedTodo: Todo;
  increment: number;

  constructor(private store: Store<fromTodoReducer.State>) {
    this.increment = 2;
  }

  ngOnInit(): void {
    this.todos$ = this.store.pipe(select(fromTodoSelectors.selectAll));
  }

  addTodo(): void {
    const todo: Todo = new Todo(++this.increment, this.newTodo);
    this.store.dispatch(new fromTodoActions.AddTodo(todo));
  }

  updateTodo(index: number, todo: Todo): void {
    this.isEdit = true;
    this.newTodo = todo.label;
    this.selectedTodo = todo;
    this.index = index;
  }

  confirmTodo(newTodoInput: string): void {
    this.selectedTodo.label = newTodoInput;
    this.store.dispatch(new fromTodoActions.UpdateTodo({ todo: { id: this.index, changes: this.selectedTodo } }));
    this.isEdit = false;
    this.newTodo = '';
  }

  deleteTodo(index: number): void {
    this.store.dispatch(new fromTodoActions.DeleteTodo(index));
  }
}
