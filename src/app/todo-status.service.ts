import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiBaseUrl } from '../const';
import { TodoStatus } from './model/todo-status';

@Injectable({
  providedIn: 'root',
})
export class TodoStatusService {
  todoStatus: TodoStatus[] = [];

  constructor(private http: HttpClient) {}

  getStatus(): Observable<TodoStatus[]> {
    return this.http.get<TodoStatus[]>(`${apiBaseUrl}/status/list`);
  }
}
