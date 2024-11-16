export interface Todos {
  data: [Todo];
  first: number;
  prev: any;
  next: number;
}

export interface Todo {
  checked: boolean;
  title: string;
  description: string;
  id: any;
}
