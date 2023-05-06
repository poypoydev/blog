"use client";
import { motion } from "framer-motion";
import { allPosts } from "@/.contentlayer/generated";
import { compareDesc, parseISO, format } from "date-fns";
import { useRouter } from "next/navigation";

function getData() {
  const data = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return data;
}

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const child = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "easeOut",
    },
  },
};

const Posts = () => {
  const data = getData();
  const router = useRouter();
  return (
    <div className="flex flex-wrap  min-w-full justify-center  ">
      <motion.h1
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            type: "easeOut",
          },
        }}
        className="font-semibold text-2xl my-5"
      >
        Latest blog posts
      </motion.h1>

      <motion.div variants={container} initial="hidden" animate="show">
        {data.map((val) => {
          return (
            <motion.div
              onClick={() => router.push(val.url)}
              variants={child}
              className={` py-2   w-full items-center inline-flex justify-between  border-t last:border-y `}
            >
              <div className="ml-5">
                <h1> {val.title}</h1>
                <time
                  dateTime={val.date}
                  className="mb-1 text-xs text-gray-600"
                >
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
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Posts;
