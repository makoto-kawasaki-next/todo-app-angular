import { Injectable } from '@angular/core';
import { TodoCategory } from './model/todo-category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiBaseUrl } from '../const';

@Injectable({
  providedIn: 'root',
})
export class TodoCategoryService {
  todoCategories: TodoCategory[] = [];

  constructor(private http: HttpClient) {}

  getCategories(): Observable<TodoCategory[]> {
    return this.http.get<TodoCategory[]>(`${apiBaseUrl}/category/list`);
  }
}
