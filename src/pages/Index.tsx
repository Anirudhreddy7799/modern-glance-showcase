import Hero from "@/components/portfolio/Hero";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Certifications from "@/components/portfolio/Certifications";
import Education from "@/components/portfolio/Education";
import Acknowledgements from "@/components/portfolio/Acknowledgements";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(102.3deg,_rgba(147,39,143,1)_5.9%,_rgba(234,172,232,1)_64%,_rgba(246,219,245,1)_89%)] opacity-90" />
      
      {/* Animated background patterns */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Content container with backdrop blur */}
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