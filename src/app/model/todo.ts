export type Todo = {
  id: number;
  categoryCode: number;
  categoryName: string;
  title: string;
  body: string;
  stateCode: number;
  stateName: string;
};

export type TodoForm = {
  categoryCode: number;
  title: string;
  body: string;
  state: number;
};
