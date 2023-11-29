import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../model/todo';
import { TodoService } from '../todo.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  private subscription = new Subscription();
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.subscription.add(
      this.todoService.getTodos().subscribe((todos) => (this.todos = todos))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  delete(todoId: number) {
    this.subscription.add(
      this.todoService.delete(todoId).subscribe((_) => this.ngOnInit())
    );
  }
}
