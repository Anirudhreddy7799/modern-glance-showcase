import Hero from "@/components/portfolio/Hero";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Certifications from "@/components/portfolio/Certifications";
import Education from "@/components/portfolio/Education";
import Acknowledgements from "@/components/portfolio/Acknowledgements";
import BackgroundEffects from "@/components/portfolio/BackgroundEffects";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundEffects />
      
      <div className="relative text-white">
        <Hero />
        <div className="bg-black/10 backdrop-blur-sm">
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Education />
          <Acknowledgements />
        </div>
      </div>
    </div>
  );
};

export default Index;