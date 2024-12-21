import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "TypeScript", "HTML5", "CSS3",
    "Git", "Python", "SQL", "MongoDB", "AWS", "Docker"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <Card key={index} className="p-4 text-center bg-white/70 backdrop-blur hover:bg-white/80 transition-all">
              {skill}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;