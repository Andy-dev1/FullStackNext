import { PostModel, PostModelAPI } from "@/@core/domain/models/post.model";

function toPostModel(postApi: PostModelAPI): PostModel {
  return {
    id: postApi.id,
    body: postApi.body_post,
    title: postApi.title_post,
  };
}

export const postListAdapter = { toPostModel };
