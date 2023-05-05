import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import HomeLayout from "@/components/HomeLayout";

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) return null;
  const Content = getMDXComponent(post.body.code);
  return (
    <HomeLayout bypass center={false}>
      <article className="py-8 mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <h1 className="font-bold text-4xl">{post.title}</h1>
          <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <p>{Math.ceil(post.readTimeMinutes)} min read</p>
        </div>
        <div className="mx-5 text-center">
          <Content />
        </div>
      </article>
    </HomeLayout>
  );
};

export default PostLayout;
