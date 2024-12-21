import { Card } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

const Certifications = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white text-outline">Certifications</h2>
        <div className="space-y-4">
          {portfolioData.certifications.map((cert, index) => (
            <Card key={index} className="p-6 bg-white/10 backdrop-blur hover:bg-white/20 transition-all border-white/20">
              <h3 className="text-xl font-semibold mb-2 text-white text-outline-sm">{cert.name}</h3>
              <p className="text-white/80">{cert.issuer} • {cert.date}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;