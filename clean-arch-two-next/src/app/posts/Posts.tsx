
import ItemPost from "./components/ItemPost";
import { IPostList } from "@/@core/domain/contracts/post.contracts";

type Props = {
  postListUseCase: IPostList;
};

const Posts = async ({ postListUseCase }: Props) => {
  
  const data = await postListUseCase.list();

  return (
    <div>
      {data.map((post) => (
        <ItemPost post={post} />
      ))}
    </div>
  );
};

export default Posts;
