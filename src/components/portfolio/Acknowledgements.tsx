import { Card } from "@/components/ui/card";

const Acknowledgements = () => {
  return (
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
  );
};

export default Acknowledgements;