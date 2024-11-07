import { IPostList } from "@/@core/domain/contracts/post.contracts";
import { PostModelAPI } from "@/@core/domain/models/post.model";

import { postListAdapter } from "./post-list.adapter";
import { IHttpClient } from "@/@core/infra/contracts/http-clients";

export class PostListUseCase implements IPostList {
  constructor(private readonly httpCLient: IHttpClient<PostModelAPI[]>) {}

  async list(): Promise<IPostList.Model> {
    const { data } = await this.httpCLient.request({
      method: "get",
      url: "http://localhost:8000/posts",
    });

    return data.map(postListAdapter.toPostModel);
  }
}

