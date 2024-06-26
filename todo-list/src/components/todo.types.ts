export type TodoListItem = {
  id: number;
  task: string;
  status: boolean;
};

export type Filter = "all" | "completed" | "active";
