import MainLayout from "../layouts/MainLayout";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import Contact from "../components/Contact";
import About from "../components/AboutSection";
import ThemeToggle from "../components/ThemeToggle";
import FeaturedProjects from "../components/FeaturedProjects";
import Footer from "../components/Footer";

function Home() {
  return (
    <MainLayout>
      <Navbar />
      <ThemeToggle />
      <Hero />
      <SkillsSection />
      <ExperienceSection />
      <About />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </MainLayout>
  );
}

export default Home;