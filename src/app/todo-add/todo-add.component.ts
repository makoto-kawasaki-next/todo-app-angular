import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoCategoryService } from '../todo-category.service';
import { TodoCategory } from '../model/todo-category';
import { TodoStatus } from '../model/todo-status';
import { Todo, TodoForm } from '../model/todo';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss',
})
export class TodoAddComponent {
  categories: TodoCategory[] = [];
  status: TodoStatus[] = [];
  private subscription = new Subscription();

  categoryId: FormControl;
  title: FormControl;
  body: FormControl;
  todoForms: FormGroup;

  constructor(
    private todoService: TodoService,
    private todoCategoryService: TodoCategoryService,
    private router: Router
  ) {
    this.categoryId = new FormControl(null, [Validators.required]);
    this.title = new FormControl(null, [Validators.required]);
    this.body = new FormControl(null, [Validators.required]);
    this.todoForms = new FormGroup({
      categoryId: this.categoryId,
      title: this.title,
      body: this.body,
      state: new FormControl(),
    });
  }

  ngOnInit() {
    this.subscription.add(
      this.todoCategoryService
        .getCategories()
        .subscribe((category) => (this.categories = category))
    );
  }

  onSave() {
    if (this.todoForms.errors) return console.log(this.todoForms.errors);
    const formValue = this.todoForms.value;
    const todo: TodoForm = {
      categoryId: formValue.categoryId!,
      title: formValue.title!,
      body: formValue.body!,
      // 新規作成時は必ず未実行（0）とする
      // 実際にはバックエンドで未実施を入れているが、Formを編集時と共通にするため初期値代入
      state: 0,
    };
    this.subscription.add(
      this.todoService
        .add(todo)
        .subscribe(() => this.router.navigateByUrl('/todo/list'))
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
