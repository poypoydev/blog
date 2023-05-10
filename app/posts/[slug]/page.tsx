import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import HomeLayout from "@/components/HomeLayout";
import { MDXComponents } from "@/components/mdx/MDXComponents";

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) return null;
  const Content = getMDXComponent(post.body.code);
  return (
    <HomeLayout bypass center={false}>
      <article className="py-8 mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <h1 className="font-bold text-4xl">{post.title}</h1>
          <div className="inline-flex justify-center items-center gap-2 font-regular text-lg  w-full my-3">
            <div
              className="w-10 h-10 rounded-full border"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80)`,
                backgroundSize: "cover",
              }}
            />
            <h1>{post.author}</h1>
          </div>
          <div className="inline-flex gap-4">
            <time
              dateTime={post.date}
              className="mb-1 text-xs  px-3 py-1 rounded-md border text-gray-600"
            >
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
            <p className="text-xs mb-1 px-3 py-1 rounded-md border  text-gray-600">
              {Math.ceil(post.readTimeMinutes)} min read
            </p>
          </div>
        </div>
        <div className="mx-8 md:mx-[10%]  prose">
          <Content components={MDXComponents} />
        </div>
      </article>
    </HomeLayout>
  );
};

export default PostLayout;
