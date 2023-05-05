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

const Page: NextPage = () => {
  return (
    <HomeLayout bypass center={false}>
      <h1 className="font-semibold text-2xl mt-9 text-center mx-5  ">
        Here are links to my social media accounts.
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {socialMedias.map((socialMedia, index) => (
          <Link
            key={index}
            href={socialMedia.url}
            className="border inline-flex gap-3 p-4 rounded-md"
          >
            {socialMedia.icon}
            <h1>{socialMedia.name}</h1>
          </Link>
        ))}
      </div>
    </HomeLayout>
  );
};

export default Page;
