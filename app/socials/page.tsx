"use client";
import { motion } from "framer-motion";
import HomeLayout from "@/components/HomeLayout";
import Navigation from "@/components/Navigation";
import { Github, Instagram, Twitch, Twitter } from "lucide-react";
import { NextPage } from "next";
import Link from "next/link";

const socialMedias = [
  {
    name: "Twitter",
    url: "https://twitter.com/poypoydev",
    icon: <Twitter />,
  },
  {
    name: "Github",
    url: "https://github.com/poypoydev",
    icon: <Github />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/poypoyy1",
    icon: <Instagram />,
  },
  {
    name: "Twitch",
    url: "https://twitch.tv/poypoydev",
    icon: <Twitch />,
  },
];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const child = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "easeOut",
    },
  },
  hidden: {
    y: 30,
    opacity: 0,
  },
};

const Page: NextPage = () => {
  return (
    <HomeLayout bypass center={false}>
      <h1 className="font-semibold text-2xl mt-9 text-center mx-5  ">
        Here are links to my social media accounts.
      </h1>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap justify-center gap-4 mt-4"
      >
        {socialMedias.map((socialMedia, index) => (
          <motion.div key={index} variants={child}>
            <Link
              href={socialMedia.url}
              className="border inline-flex gap-3 p-4 rounded-md"
            >
              {socialMedia.icon}
              <h1>{socialMedia.name}</h1>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </HomeLayout>
  );
};

export default Page;
