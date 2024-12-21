import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Your Name</h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">Full Stack Developer</p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur hover:bg-white/20 border-white/30">
            <Github className="h-5 w-5 text-white" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur hover:bg-white/20 border-white/30">
            <Linkedin className="h-5 w-5 text-white" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur hover:bg-white/20 border-white/30">
            <Mail className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;