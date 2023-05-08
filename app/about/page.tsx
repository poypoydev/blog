"use client";

import { motion } from "framer-motion";
import HomeLayout from "@/components/HomeLayout";
import Navigation from "@/components/Navigation";
import Header from "@/components/about/Header";
import { NextPage } from "next";
import Link from "next/link";
import Social from "@/components/Socials";

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
        <motion.h1
          variants={children}
          className="text-center font-bold text-4xl my-8"
        >
          Who am I?
        </motion.h1>

        <motion.p
          variants={children}
          className="my-3 md:mx-[25%] md:border md:p-4 rounded-md text-center"
        >
          My name is{" "}
          <span className="underline underline-offset-2 pb-3">
            Poyraz Birbil.
          </span>{" "}
          I am a high school student living in Utrecht, the Netherlands. I am
          Turkish, but have lived in different countries such as the US & the
          Netherlands. I enjoy web design and development and am interested in
          technologies such as React, Solid and Next.{" "}
        </motion.p>
        <motion.p
          variants={children}
          className=" md:mx-[25%] text-center bg-black text-white rounded-md my-4 border px-3 py-4"
        >
          <Link href={"https://poypoy.dev"}>
            If you want to contact me, check out my socials below, or click this
            button to visit my website.
          </Link>
        </motion.p>
        <Social />
      </motion.div>
    </HomeLayout>
  );
};

export default Page;
