"use client";
import { motion } from "framer-motion";
import { allPosts, type Post } from "@/.contentlayer/generated";
import { compareDesc, parseISO, format } from "date-fns";
import { useRouter } from "next/navigation";
import { use } from "react";

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
      staggerChildren: 0.5,
      delay: 0.5,
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
            delay: 0.5,
          },
        }}
        className="font-semibold md:text-4xl md:my-9 text-2xl my-5"
      >
        Latest blog posts
      </motion.h1>

      <motion.div
        className="w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {data.map((val) => {
          return (
            <motion.div
              key={val._id}
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
                    backgroundImage: `url(./pf.jpeg)`,
                    backgroundSize: "cover",
                    backgroundPositionY: "60%",
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
