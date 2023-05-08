import { motion } from "framer-motion";
import { Github, Instagram, Twitch, Twitter } from "lucide-react";
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
      delayChildren: 1,
      delay: 1,
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

const Social = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-wrap md:mx-[25%] justify-between   gap-4 "
    >
      {socialMedias.map((socialMedia, index) => (
        <motion.div
          className="  py-4 flex justify-center px-4 grow rounded-md border "
          key={index}
          variants={child}
        >
          <Link href={socialMedia.url} className=" gap-3 inline-flex ">
            {socialMedia.icon}
            <h1>{socialMedia.name}</h1>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Social;
