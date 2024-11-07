import { PostModel } from "../models/post.model";

export interface IPostList {
  list(): Promise<IPostList.Model>;
}

export namespace IPostList {
  export type Model = PostModel[];
}
