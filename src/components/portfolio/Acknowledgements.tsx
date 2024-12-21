import { Card } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

const Acknowledgements = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white text-outline">Acknowledgements</h2>
        <Card className="p-6 bg-white/10 backdrop-blur hover:bg-white/20 transition-all border-white/20">
          <p className="text-white/80">
            {portfolioData.acknowledgements.text}
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Acknowledgements;