import Hero from "@/components/portfolio/Hero";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Certifications from "@/components/portfolio/Certifications";
import Education from "@/components/portfolio/Education";
import Acknowledgements from "@/components/portfolio/Acknowledgements";

const Index = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_rgb(254,100,121)_0%,_rgb(251,221,186)_100%)]">
      <div className="relative">
        <Hero />
        <div className="backdrop-blur-sm bg-white/5">
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