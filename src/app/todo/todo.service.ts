import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = [new Todo('Learn Java'), new Todo('Learn Angular')];
  todosChanged = new BehaviorSubject(this.todos);

  constructor() {}

  add(todo: Todo) {
    this.todos.push(todo);
    this.todosChanged.next(this.todos.slice());
  }

  delete(index: number) {
    this.todos.splice(index, 1);
    this.todosChanged.next(this.todos.slice());
  }

  update(index: number, todo: Todo) {
    this.todos[index] = todo;
    this.todosChanged.next(this.todos.slice());
  }

  deleteAll() {
    this.todos = [];
    this.todosChanged.next(this.todos.slice());
  }
}
