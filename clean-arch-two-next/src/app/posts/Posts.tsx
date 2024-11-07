import ItemPost from "./components/ItemPost";
import { IPostList } from "@/@core/domain/contracts/post.contracts";

type Props = {
  postListUseCase: IPostList;
};

const Posts = async ({ postListUseCase }: Props) => {
  const data = await postListUseCase.list();

  return (
    <div>
      <ul>
        {data.map((post) => (
          <ItemPost post={post} />
        ))}
      </ul>
    </div>
  );
};

export default Posts;
