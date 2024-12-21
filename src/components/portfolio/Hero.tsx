import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-[#accbee] to-[#e7f0fd]">
      <div className="max-w-3xl mx-auto text-center fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#2d3436]">Your Name</h1>
        <p className="text-xl md:text-2xl mb-8 text-[#2d3436]">Full Stack Developer</p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="icon" className="bg-white/80 hover:bg-white">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/80 hover:bg-white">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/80 hover:bg-white">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;