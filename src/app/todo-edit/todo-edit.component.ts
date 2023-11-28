import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo.service';
import { TodoCategoryService } from '../todo-category.service';
import { TodoStatusService } from '../todo-status.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoCategory } from '../model/todo-category';
import { TodoStatus } from '../model/todo-status';
import { TodoForm } from '../model/todo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.scss',
})
export class TodoEditComponent {
  private subscription = new Subscription();
  todoId: number;
  categoryId?: number;
  categoryForm: FormControl;
  title: FormControl;
  body: FormControl;
  stateCode?: number;
  stateForm: FormControl;
  todoForms: FormGroup;
  categories: TodoCategory[] = [];
  status: TodoStatus[] = [];

  constructor(
    private todoService: TodoService,
    private categoryService: TodoCategoryService,
    private statusService: TodoStatusService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.todoId = Number(this.route.snapshot.paramMap.get('todoId'));
    this.categoryForm = new FormControl(undefined);
    this.title = new FormControl();
    this.body = new FormControl();
    this.stateForm = new FormControl();
    this.todoForms = new FormGroup({
      categoryForm: this.categoryForm,
      title: this.title,
      body: this.body,
      stateForm: this.stateForm,
    });
  }

  ngOnInit() {
    this.subscription.add(
      this.todoService.get(this.todoId).subscribe((todo) => {
        this.categoryForm.setValue(todo.category.id);
        this.title.setValue(todo.title);
        this.body.setValue(todo.body);
        this.stateForm.setValue(todo.state.code);
        this.categoryId = todo.category.id;
        this.stateCode = todo.state.code;
      })
    );
    this.subscription.add(
      this.categoryService
        .getCategories()
        .subscribe((categories) => (this.categories = categories))
    );
    this.subscription.add(
      this.statusService
        .getStatus()
        .subscribe((status) => (this.status = status))
    );
  }

  onSave() {
    const formData = this.todoForms.value;
    const todo: TodoForm = {
      categoryId: formData.categoryForm,
      title: formData.title,
      body: formData.body,
      state: formData.stateForm,
    };

    this.subscription.add(
      this.todoService
        .update(this.todoId, todo)
        .subscribe((_) => this.router.navigateByUrl('/todo/list'))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
