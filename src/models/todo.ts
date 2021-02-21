
export interface TodoList {
  list: Todo[]
}

export interface Todo {
  label: string;
  id: number;
  isImportant: boolean;
  isCompleted: boolean;
}