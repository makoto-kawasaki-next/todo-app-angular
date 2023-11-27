export type Todo = {
  id: number;
  categoryId: number;
  categoryName: string;
  title: string;
  body: string;
  stateCode: number;
  stateName: string;
};

export type TodoForm = {
  categoryId: number;
  title: string;
  body: string;
  state: number;
};
