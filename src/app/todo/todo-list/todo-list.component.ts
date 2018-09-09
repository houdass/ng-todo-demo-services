import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  todos$: any;
  isEdit = false;
  newTodo: string;
  index: number;
  selectedTodo: Todo;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.todosChanged;
  }

  addTodo(newTodo: string): void {
    const todo: Todo = new Todo(newTodo);
    this.todoService.add(todo);
  }

  updateTodo(index: number, todo: Todo): void {
    this.isEdit = true;
    this.newTodo = todo.name;
    this.selectedTodo = todo;
    this.index = index;
  }

  confirmTodo(newTodoInput: string): void {
    this.selectedTodo.name = newTodoInput;
    this.todoService.update(this.index, this.selectedTodo);
    this.isEdit = false;
    this.newTodo = '';
  }

  deleteTodo(index: number): void {
    this.todoService.delete(index);
  }
}
