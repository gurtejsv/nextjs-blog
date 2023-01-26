import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <Link href={`/posts/${props.slug}`}>
        <h2 className="hover:underline text-blue-500">
          {props.title}
        </h2>
      </Link>
      <p className="text-sm">{props.date}</p>
    </div>
  );
};

export default PostPreview;
