"use client";
import { type FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCurrentStage } from "@/helpers/stores";

const Landing: FC = () => {
  const stage = useCurrentStage((state) => state.stage);

  const increaseStage = useCurrentStage((state) => state.setStage);
  useEffect(() => {
    if (stage >= 2) return () => null;
    const firstTime = setTimeout(() => {
      increaseStage(1);
      setTimeout(() => {
        increaseStage(2);
      }, 3000);
    }, 2000);

    return () => clearTimeout(firstTime);
  }, []);
  if (stage > 2) return null;
  return (
    <>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: stage === 1 ? 0 : "-100%" }}
        transition={{
          type: "easeOut",
          duration: 0.3,
          delay: 0.15,
        }}
        exit={{ y: "-100%" }}
        className="absolute bg-black flex items-center justify-center h-full w-full"
      >
        <motion.h1
          initial={{ y: 25, opacity: 0 }}
          animate={{ opacity: stage === 1 ? 1 : 0, y: stage === 1 ? 0 : 25 }}
          transition={{
            type: "easeOut",
            delay: 1,
          }}
          className="font-semibold text-6xl text-white"
        >
          Ready?
        </motion.h1>
      </motion.div>
      {/*  */}
      <AnimatePresence>
        {stage === 0 && (
          <motion.div
            transition={{
              type: "easeOut",
              duration: 0.7,
            }}
            className="  h-full flex flex-wrap items-center content-center justify-center"
            exit={{ opacity: 0, y: 30 }}
          >
            <motion.h2
              initial={{
                y: 25,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                type: "easeOut",
              }}
              className="w-full text-center font-semibold text-2xl"
            >
              What's up?
            </motion.h2>
            <div className="flex flex-row items-center gap-3">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="font-bold text-4xl my-4"
              >
                I'm{" "}
              </motion.h1>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                }}
                className="px-3 py-1 text-3xl rounded-md border border-black"
              >
                Poyraz.
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Landing;
