import MainLayout from "../layouts/MainLayout";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
    </MainLayout>
  );
}

export default Home;