import { Card } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

const Skills = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white text-outline">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioData.skills.map((skill, index) => (
            <Card key={index} className="p-4 text-center bg-white/10 backdrop-blur hover:bg-white/20 transition-all border-white/20 text-white text-outline-sm">
              {skill}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;