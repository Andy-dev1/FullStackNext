import { PostListUseCase } from "@/@core/data/useCases/PostListUseCase/post-list.usecase";
import Posts from "./Posts";
import { AxiosHttpClient } from "@/@core/infra/implementations/axios-http-client/axios-http-client";

const page = () => {
  const postListUseCase = new PostListUseCase(new AxiosHttpClient());
  return (
    <div>
      <Posts postListUseCase={postListUseCase} />
    </div>
  );
};

export default page;
