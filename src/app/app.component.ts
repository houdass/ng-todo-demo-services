import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromTodoReducer from './todo/todo.reducer';
import * as fromTodoActions from './todo/todo.actions';
import * as fromTodoSelectors from './todo//todo.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private store: Store<fromTodoReducer.State>) {}

  ngOnInit() {
    this.store.dispatch(new fromTodoActions.GetTodos());
  }
}
