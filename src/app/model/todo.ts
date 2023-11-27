export type Todo = {
  id: number;
  categoryName: string;
  title: string;
  body: string;
  state: string;
};

export type TodoForm = {
  categoryId: number;
  title: string;
  body: string;
  state: number;
};
