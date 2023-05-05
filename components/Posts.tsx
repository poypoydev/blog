import { allPosts } from "@/.contentlayer/generated";
import { compareDesc, parseISO, format } from "date-fns";
import Link from "next/link";

async function getData() {
  const data = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return data;
}

const Posts = async () => {
  const data = await getData();
  let delay = 0;
  return (
    <div className="flex flex-wrap  min-w-full justify-center  ">
      <h1 className="font-semibold animate-in slide-in-from-bottom-3    fade-in ease-out duration-500 text-2xl my-5">
        Latest blog posts
      </h1>

      {data.map((val) => {
        delay = delay + 0.18;
        console.log(delay);
        return (
          <Link
            key={val._id}
            href={val.url}
            className={` py-2 animate-in slide-in-from-bottom-3   delay-[${delay}] fade-in ease-out duration-500 w-full items-center inline-flex justify-between  border-t last:border-y `}
          >
            <div className="ml-5">
              <h1> {val.title}</h1>
              <time dateTime={val.date} className="mb-1 text-xs text-gray-600">
                {format(parseISO(val.date), "LLLL d, yyyy")}
              </time>
            </div>

            <div className="inline-flex mr-5 gap-2">
              <div
                className="w-6 h-6 rounded-full border"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80)`,
                  backgroundSize: "cover",
                }}
              />
              <h2>{val.author}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Posts;
