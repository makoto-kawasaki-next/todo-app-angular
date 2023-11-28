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

  get(todoId: number): Observable<Todo> {
    return this.http.get<Todo>(`${apiBaseUrl}/todo/${todoId}`);
  }
  add(todo: TodoForm): Observable<object> {
    return this.http.post<object>(`${apiBaseUrl}/todo/store`, todo);
  }

  update(todoId: number, todo: TodoForm): Observable<object> {
    return this.http.put<object>(`${apiBaseUrl}/todo/${todoId}`, todo);
  }

  delete(todoId: number): Observable<object> {
    return this.http.delete<object>(`${apiBaseUrl}/todo/${todoId}`);
  }
}
