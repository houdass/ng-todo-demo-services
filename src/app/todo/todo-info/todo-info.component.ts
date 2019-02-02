import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromTodoReducer from '../todo.reducers';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html'
})
export class TodoInfoComponent implements OnInit {
  todoState$: any;

  constructor(private store: Store<fromTodoReducer.State>) {}

  ngOnInit(): void {
    this.todoState$ = this.store.pipe(select('todo'));
  }

  deleteAllTodos(): void {
    this.store.dispatch({ type: 'DELETE ALL TODOS' });
  }
}
