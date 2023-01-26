import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <>
      <header>
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold mb-2">Gurtej Virdi</h1>
          <p className="text-xl">Welcome to my blog! ٩(ˊᗜˋ*)ﾉ</p>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4">
        {postPreviews}
      </div>
    </>
  );
};

export default HomePage;
