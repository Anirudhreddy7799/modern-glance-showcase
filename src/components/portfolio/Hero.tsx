import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#1A1F2C]">Your Name</h1>
        <p className="text-xl md:text-2xl mb-8 text-[#403E43]">Full Stack Developer</p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="icon" className="bg-white/20 backdrop-blur hover:bg-white/30 border-white/30">
            <Github className="h-5 w-5 text-[#221F26]" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/20 backdrop-blur hover:bg-white/30 border-white/30">
            <Linkedin className="h-5 w-5 text-[#221F26]" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/20 backdrop-blur hover:bg-white/30 border-white/30">
            <Mail className="h-5 w-5 text-[#221F26]" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;