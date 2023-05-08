"use client";
import { motion } from "framer-motion";

const Header = ({}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      transition={{
        type: "easeOut",
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="w-full h-[25%] md:h-[40%] rounded-md border-y"
      style={{
        backgroundImage: `url(./pf.jpeg)`,
        backgroundSize: "99%",
        backgroundPositionX: "center",
        backgroundPositionY: "60%",
      }}
    />
  );
};

export default Header;
