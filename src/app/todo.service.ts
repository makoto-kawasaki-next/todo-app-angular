import { Injectable } from '@angular/core';
import { Todo, TodoForm } from './model/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiBaseUrl } from '../const';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${apiBaseUrl}/todo/list`);
  }

  add(todo: TodoForm): Observable<object> {
    return this.http.post<object>(`${apiBaseUrl}/todo/store`, todo);
  }
}
