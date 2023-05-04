const Page = ({}) => {
  async function increment() {
    "use server";
    console.log("increment");
  }

  return (
    <form action={increment}>
      <button type="submit">Like</button>
    </form>
  );
};

export default Page;
