import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-poppins">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

export default Home;
