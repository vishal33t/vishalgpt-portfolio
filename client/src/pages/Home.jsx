import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-white text-5xl font-bold">
          Welcome to VishalGPT
        </h1>
      </div>
    </>
  );
}

export default Home;