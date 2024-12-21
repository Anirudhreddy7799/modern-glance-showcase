import { Card } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      year: "2019-2023"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#e6e9f0] to-[#eef1f5]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <Card key={index} className="p-6 bg-white/70 backdrop-blur hover:bg-white/80 transition-all">
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution} • {edu.year}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;