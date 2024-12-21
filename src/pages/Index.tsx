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
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
      {/* Hero Section */}
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

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#e6e9f0] to-[#eef1f5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience Highlights</h2>
          <div className="space-y-4">
            <Card className="p-6 bg-white/80 backdrop-blur">
              <h3 className="text-xl font-semibold mb-2">Senior Developer</h3>
              <p className="text-gray-600">Led development of multiple high-impact projects</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#F2FCE2] to-[#FEF7CD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} className="p-4 text-center bg-white/80 backdrop-blur">
                {skill}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#e6e9f0] to-[#eef1f5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 bg-white/80 backdrop-blur">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-sm bg-gray-100 px-2 py-1 rounded">
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
      <section className="py-20 px-4 bg-gradient-to-r from-[#F2FCE2] to-[#FEF7CD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 bg-white/80 backdrop-blur">
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.issuer} • {cert.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#e6e9f0] to-[#eef1f5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 bg-white/80 backdrop-blur">
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution} • {edu.year}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Acknowledgements Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#F2FCE2] to-[#FEF7CD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Acknowledgements</h2>
          <Card className="p-6 bg-white/80 backdrop-blur">
            <p className="text-gray-600">
              Special thanks to all mentors and colleagues who have contributed to my professional growth.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;