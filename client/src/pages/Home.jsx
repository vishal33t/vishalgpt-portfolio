import MainLayout from "../layouts/MainLayout";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";

function Home() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <FeaturedProjects />
    </MainLayout>
  );
}

export default Home;