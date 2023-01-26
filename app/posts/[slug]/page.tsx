import getPostMetadata from "@/components/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">{post.data.title}</h1>
        <p className="mb-6">{post.data.date}</p>
      </div>
      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
      <Link href={"/"} className="hover:underline text-blue-500 mt-12">← return to home</Link>
    </>
  );
};

export default PostPage;
