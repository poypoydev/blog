import HomeLayout from "@/components/HomeLayout";
import Landing from "@/components/Landing";
import Navigation from "@/components/Navigation";
import Posts from "@/components/Posts";

const Page = ({}) => {
  return (
    <>
      <Landing />
      <HomeLayout center={false}>
        <div className="h-full flex justify-center flex-wrap content-start w-full">
          {/* <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              type: "easeOut",
            }}
            className="text-2xl text-center my-4 px-5 py-2 inline-block font-semibold"
          >
            Latest blog posts
          </motion.h1> */}

          <Posts />
        </div>
      </HomeLayout>
    </>
  );
};

export default Page;
