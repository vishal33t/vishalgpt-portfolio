import MainLayout from "../layouts/MainLayout";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/AboutSection";
import FeaturedProjects from "../components/FeaturedProjects";

function Home() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
    </MainLayout>
  );
}

export default Home;