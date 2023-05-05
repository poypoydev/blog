import HomeLayout from "@/components/HomeLayout";
import Navigation from "@/components/Navigation";
import { NextPage } from "next";

const Page: NextPage = () => {
  return <HomeLayout bypass center={false}></HomeLayout>;
};

export default Page;
