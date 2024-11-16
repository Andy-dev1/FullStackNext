export interface Posts {
  data: [Post];
  first: number;
  prev: any;
  next: number;
}

export interface Post {
  id: string;
  title: string;
}
