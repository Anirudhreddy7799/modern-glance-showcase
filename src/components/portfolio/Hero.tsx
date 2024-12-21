import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

const Hero = () => {
  const { name, title, socialLinks } = portfolioData.hero;
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white text-outline">{name}</h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 text-outline-sm">{title}</p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur hover:bg-white/20 border-white/30" onClick={() => window.open(socialLinks.github, '_blank')}>
            <Github className="h-5 w-5 text-white" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur hover:bg-white/20 border-white/30" onClick={() => window.open(socialLinks.linkedin, '_blank')}>
            <Linkedin className="h-5 w-5 text-white" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur hover:bg-white/20 border-white/30" onClick={() => window.open(socialLinks.email, '_blank')}>
            <Mail className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;