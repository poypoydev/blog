"use client";
import { useCurrentStage } from "@/helpers/stores";
import { motion } from "framer-motion";
import { Globe, PersonStanding, ScrollText } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { FC } from "react";

const Navigation: FC<{ delay?: number }> = ({ delay = 0 }) => {
  const router = usePathname();
  const setStage = useCurrentStage((state) => state.setStage);
  console.log(router);
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        // delay: 0.2,
        delay: delay,
        duration: 0.4,
        type: "easeOut",
      }}
      className=" overflow-hidden  top-0 inline-flex items-center py-3  w-full justify-between"
    >
      <motion.h1
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: delay,
          duration: 0.4,
          type: "easeOut",
        }}
        className="font-bold text-3xl ml-4"
      >
        Poyraz
      </motion.h1>
      <motion.ul
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: delay,
          duration: 0.4,
          type: "easeOut",
        }}
        className="mr-4 flex gap-4"
      >
        <li
          className={` ${
            router === "/" ? "border-black/40 border" : ""
          } p-2 rounded-md`}
        >
          <Link onClick={() => setStage(2)} href="/">
            <ScrollText />
          </Link>
        </li>
        <li
          className={` ${
            router.includes("about") ? "border-black/40 border" : ""
          } p-2 rounded-md`}
        >
          <Link href="/about">
            <PersonStanding />
          </Link>
        </li>
      </motion.ul>
    </motion.nav>
  );
};

export default Navigation;
