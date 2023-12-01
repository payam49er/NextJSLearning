import { PostCardProps } from "@/types/PostCard";

const PostCard = (post: PostCardProps) => {
  return (
    <ul>
      <li className="m-2 p-3">
        <div className="flex justify-left flex-wrap text-color-white">
          <h3 className="font-bold pt-3 pb-2 ">{post.title}</h3>
          <p className="overflow-clip">{post.body}</p>
        </div>
      </li>
    </ul>
  );
};

export default PostCard;
