import { FC } from "react";
import Image from "next/image";

const MDXImage: FC<{ width: number; height: number; src: string }> = ({
  width,
  height,
  src,
}) => {
  return <Image alt="fuckye" width={width} height={height} src={src} />;
};

export { MDXImage };
