"use client";

import { motion } from "framer-motion";
import HomeLayout from "@/components/HomeLayout";
import Navigation from "@/components/Navigation";
import Header from "@/components/about/Header";
import { NextPage } from "next";
import Link from "next/link";

const container = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const children = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "easeOut",
    },
  },
};

const Page: NextPage = () => {
  return (
    <HomeLayout bypass center={false}>
      <motion.div
        variants={container}
        animate="animate"
        initial="hidden"
        className=" h-full  mx-4"
      >
        <Header />
        <motion.h1
          variants={children}
          className="text-center font-bold text-4xl my-8"
        >
          Who am I?
        </motion.h1>

        <motion.p variants={children} className="my-3 text-center">
          My name is{" "}
          <span className="underline underline-offset-2 pb-3">
            Poyraz Birbil.
          </span>{" "}
          I am a high school student living in Utrecht, the Netherlands. I am
          Turkish, but have lived in different countries such as the US & the
          Netherlands. I enjoy web design and development and am interested in
          technologies such as React, Solid and Next.{" "}
        </motion.p>
        <Link
          className="text-center rounded-full mt-8 border px-3 py-2"
          href={"https://poypoy.dev"}
        >
          <motion.p
            variants={children}
            className="rounded-full border px-4 py-2"
          >
            If you want to contact me, check out my portfolio site.
          </motion.p>
        </Link>
      </motion.div>
    </HomeLayout>
  );
};

export default Page;
