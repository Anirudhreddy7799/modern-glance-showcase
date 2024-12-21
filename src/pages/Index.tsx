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
      {/* Modern gradient overlay with reduced opacity (5% less) */}
      <div className="absolute inset-0" style={{
        background: `
          linear-gradient(
            45deg,
            #FF6B6B 0%,
            #4ECDC4 17%,
            #45B7D1 34%,
            #96C93D 51%,
            #FED766 68%,
            #7F78D2 85%,
            #FF69B4 100%
          )
        `,
        opacity: 0.85, // Reduced from 0.9
      }}></div>
      
      {/* Vector art background patterns with reduced opacity */}
      <div 
        className="absolute inset-0 opacity-5" // Reduced from opacity-15
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          animation: 'patternMove 20s linear infinite'
        }}
      />
      
      {/* Additional geometric patterns with reduced opacity */}
      <div 
        className="absolute inset-0 opacity-5" // Reduced from opacity-15
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          animation: 'patternMove 30s linear infinite reverse'
        }}
      />

      {/* Random lines and shapes background with reduced opacity */}
      <div 
        className="absolute inset-0 opacity-5" // Reduced from opacity-15
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23ffffff' stroke-width='0.5' fill='none'%3E%3Ccircle cx='50' cy='50' r='30'%3E%3Canimate attributeName='r' from='20' to='40' dur='4s' repeatCount='indefinite'/%3E%3C/circle%3E%3Cpolygon points='20,20 80,20 80,80 20,80'%3E%3Canimate attributeName='points' dur='7s' repeatCount='indefinite' values='20,20 80,20 80,80 20,80;40,10 90,40 60,90 10,60;20,20 80,20 80,80 20,80'/%3E%3C/polygon%3E%3Cpath d='M10,30 Q50,10 90,30 T90,70'%3E%3Canimate attributeName='d' dur='5s' repeatCount='indefinite' values='M10,30 Q50,10 90,30 T90,70;M10,50 Q50,70 90,50 T90,30;M10,30 Q50,10 90,30 T90,70'/%3E%3C/path%3E%3Cline x1='0' y1='0' x2='100' y2='100'%3E%3Canimate attributeName='x2' dur='3s' repeatCount='indefinite' values='100;0;100'/%3E%3Canimate attributeName='y2' dur='3s' repeatCount='indefinite' values='100;0;100'/%3E%3C/line%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          animation: 'patternMove 40s linear infinite'
        }}
      />
      
      {/* Content container with enhanced text highlight */}
      <div className="relative text-white">
        <Hero />
        <div className="bg-white/5">
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