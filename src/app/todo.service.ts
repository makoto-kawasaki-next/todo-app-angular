import { Injectable } from '@angular/core';
import {Todo} from "./todo";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  private url = "http://127.0.0.1:9000"
  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.url}/todo/list`)
  }
}
