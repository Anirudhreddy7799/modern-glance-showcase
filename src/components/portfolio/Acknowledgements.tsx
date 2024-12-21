import { Card } from "@/components/ui/card";

const Acknowledgements = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#8B5CF6] to-[#C4B5FD]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Acknowledgements</h2>
        <Card className="p-6 bg-white/10 backdrop-blur hover:bg-white/20 transition-all border-white/20">
          <p className="text-white/80">
            Special thanks to all mentors and colleagues who have contributed to my professional growth.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Acknowledgements;