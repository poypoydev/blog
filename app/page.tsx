import HomeLayout from "@/components/HomeLayout";
import Landing from "@/components/Landing";
import Navigation from "@/components/Navigation";
import Posts from "@/components/Posts";

const Page = ({}) => {
  return (
    <>
      <Landing />
      <HomeLayout center={false}></HomeLayout>
    </>
  );
};

export default Page;
