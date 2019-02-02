import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoInfoComponent } from './todo/todo-info/todo-info.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducers';

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoInfoComponent],
  imports: [BrowserModule, FormsModule, StoreModule.forRoot({ todo: todoReducer })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
