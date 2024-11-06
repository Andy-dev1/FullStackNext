import { IPostList } from "@/@core/domain/contracts/post.contracts";
import { PostModel, PostModelAPI } from "@/@core/domain/models/post.model";
import axios from "axios";
import { postListAdapter } from "./post-list.adapter";

export class PostListUseCase implements IPostList {
  async list(): Promise<PostModel[]> {
    const { data } = await axios.get<PostModelAPI[]>(
      "http://localhost:8000/posts"
    );
    return data.map(postListAdapter.toPostModel);
  }
}
