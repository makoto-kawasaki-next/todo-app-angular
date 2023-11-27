import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

export const routes: Routes = [
  { path: 'todo/list', component: TodoListComponent, pathMatch: 'full' },
  { path: 'todo/add', component: TodoAddComponent, pathMatch: 'full' },
  {
    path: 'todo/edit/:todoId',
    component: TodoEditComponent,
    pathMatch: 'full',
  },
];
