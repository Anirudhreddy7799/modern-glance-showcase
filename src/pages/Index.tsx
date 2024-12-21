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
    },
    // Add more projects as needed
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="hero" className="section-padding min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Name</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer
          </p>
          <p className="text-lg mb-8 max-w-2xl">
            A passionate developer focused on creating intuitive and efficient web applications.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <a href="mailto:your.email@example.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Summary Section */}
      <section id="experience" className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto fade-in">
          <h2 className="text-3xl font-bold mb-8">Experience Highlights</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Senior Developer</h3>
              <p className="text-muted-foreground">
                Led development of multiple high-impact projects, improving system efficiency by 40%
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Tech Lead</h3>
              <p className="text-muted-foreground">
                Managed a team of 5 developers, delivering projects on time and within budget
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-4xl mx-auto fade-in">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} className="p-4 text-center hover:bg-secondary transition-colors">
                {skill}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto fade-in">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm bg-background px-2 py-1 rounded"
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
      <section id="certifications" className="section-padding">
        <div className="max-w-4xl mx-auto fade-in">
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-muted-foreground">
                  {cert.issuer} • {cert.date}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto fade-in">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-muted-foreground">
                  {edu.institution} • {edu.year}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Acknowledgements Section */}
      <section id="acknowledgements" className="section-padding">
        <div className="max-w-4xl mx-auto fade-in">
          <h2 className="text-3xl font-bold mb-8">Acknowledgements</h2>
          <Card className="p-6">
            <p className="text-muted-foreground">
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