import { TodoCategory } from './todo-category';
import { TodoStatus } from './todo-status';

export type Todo = {
  id: number;
  category: TodoCategory;
  title: string;
  body: string;
  state: TodoStatus;
};

export type TodoForm = {
  categoryId: number;
  title: string;
  body: string;
  state: number;
};
