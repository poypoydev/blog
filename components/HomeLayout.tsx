"use client";

import { useCurrentStage } from "@/helpers/stores";
import { FC, PropsWithChildren, ReactNode } from "react";
import Navigation from "./Navigation";

interface HomeLayoutProps extends PropsWithChildren {
  bypass?: boolean;
  center?: boolean;
}

const HomeLayout: FC<HomeLayoutProps> = ({
  children,

  bypass,
  center = true,
}) => {
  const stage = useCurrentStage((state) => state.stage);
  console.log(stage);
  return (
    <div
      className={`h-full w-full ${
        center && "flex-wrap content-center flex items-center justify-center"
      } `}
    >
      {(stage === 2 || bypass) && (
        <>
          <Navigation delay={bypass ? 0 : 0.5} />

          {children}
        </>
      )}
    </div>
  );
};

export default HomeLayout;
