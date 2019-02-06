import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<Array<Todo>> {
    return this.httpClient
      .get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos')
      .pipe(map((todos: Array<Todo>) => todos.slice(0, 4)));
  }
}
