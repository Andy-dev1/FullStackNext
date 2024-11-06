import { PostListUseCase } from "@/@core/data/useCases/PostListUseCase/post-list.usecase";
import Posts from "./Posts";

const page = () => {
  const postListUseCase = new PostListUseCase();
  return (
    <div>
      <Posts postListUseCase={postListUseCase} />
    </div>
  );
};

export default page;
