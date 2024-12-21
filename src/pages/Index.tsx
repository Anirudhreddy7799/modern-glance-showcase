import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "TypeScript", "HTML5", "CSS3",
    "Git", "Python", "SQL", "MongoDB", "AWS", "Docker"
  ];

  const projects = [
    {
      title: "Project 1",
      description: "A brief description of project 1",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Project 2",
      description: "A brief description of project 2",
      technologies: ["TypeScript", "Express", "PostgreSQL"],
      link: "#"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023"
    },
    {
      name: "Professional Scrum Master",
      issuer: "Scrum.org",
      date: "2023"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      year: "2019-2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3]">
      {/* Hero Section */}
      <section id="hero" className="section-padding min-h-screen flex items-center bg-gradient-to-r from-[#accbee] to-[#e7f0fd]">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-transparent bg-clip-text">Your Name</h1>
          <p className="text-xl md:text-2xl text-[#1A1F2C] mb-8">
            Full Stack Developer
          </p>
          <p className="text-lg mb-8 max-w-2xl text-[#333333]">
            A passionate developer focused on creating intuitive and efficient web applications.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="hover:bg-[#9b87f5] hover:text-white transition-all duration-300">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-[#9b87f5] hover:text-white transition-all duration-300">
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-[#9b87f5] hover:text-white transition-all duration-300">
              <a href="mailto:your.email@example.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Summary Section */}
      <section id="experience" className="section-padding bg-gradient-to-r from-[#F2FCE2] to-[#FEF7CD]">
        <div className="max-w-4xl mx-auto fade-in">
          <h2 className="text-3xl font-bold mb-8 text-[#1A1F2C]">Experience Highlights</h2>
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-[#9b87f5] border-2">
              <h3 className="text-xl font-semibold mb-2 text-[#8B5CF6]">Senior Developer</h3>
              <p className="text-[#333333]">
                Led development of multiple high-impact projects, improving system efficiency by 40%
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-[#9b87f5] border-2">
              <h3 className="text-xl font-semibold mb-2 text-[#8B5CF6]">Tech Lead</h3>
              <p className="text-[#333333]">
                Managed a team of 5 developers, delivering projects on time and within budget
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-gradient-to-r from-[#D3E4FD] to-[#FEC6A1]">
        <div className="max-w-4xl mx-auto fade-in">
          <h2 className="text-3xl font-bold mb-8 text-[#1A1F2C]">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} className="p-4 text-center hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm border-[#9b87f5] border hover:border-[#D946EF]">
                <span className="text-[#333333]">{skill}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3]">
        <div className="max-w-4xl mx-auto fade-in">
          <h2 className="text-3xl font-bold mb-8 text-[#1A1F2C]">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-[#9b87f5] border hover:border-[#D946EF]">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-[#8B5CF6]">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5 text-[#9b87f5] hover:text-[#D946EF]" />
                  </a>
                </div>
                <p className="text-[#333333] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm bg-[#F1F0FB] px-2 py-1 rounded text-[#8B5CF6]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-padding bg-gradient-to-r from-[#D6BCFA] to-[#F1F0FB]">
        <div className="max-w-4xl mx-auto fade-in">
          <h2 className="text-3xl font-bold mb-8 text-[#1A1F2C]">Certifications</h2>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-[#9b87f5] border hover:border-[#D946EF]">
                <h3 className="text-xl font-semibold mb-2 text-[#8B5CF6]">{cert.name}</h3>
                <p className="text-[#333333]">
                  {cert.issuer} • {cert.date}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-gradient-to-r from-[#FEF7CD] to-[#F2FCE2]">
        <div className="max-w-4xl mx-auto fade-in">
          <h2 className="text-3xl font-bold mb-8 text-[#1A1F2C]">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-[#9b87f5] border hover:border-[#D946EF]">
                <h3 className="text-xl font-semibold mb-2 text-[#8B5CF6]">{edu.degree}</h3>
                <p className="text-[#333333]">
                  {edu.institution} • {edu.year}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Acknowledgements Section */}
      <section id="acknowledgements" className="section-padding bg-gradient-to-r from-[#accbee] to-[#e7f0fd]">
        <div className="max-w-4xl mx-auto fade-in">
          <h2 className="text-3xl font-bold mb-8 text-[#1A1F2C]">Acknowledgements</h2>
          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-[#9b87f5] border hover:border-[#D946EF]">
            <p className="text-[#333333]">
              Special thanks to all mentors, colleagues, and organizations that have contributed to my professional growth.
              Your guidance and support have been invaluable in shaping my career journey.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;