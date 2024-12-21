import { Card } from "@/components/ui/card";

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#e6e9f0] to-[#eef1f5]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience Highlights</h2>
        <div className="space-y-4">
          <Card className="p-6 bg-white/70 backdrop-blur hover:bg-white/80 transition-all">
            <h3 className="text-xl font-semibold mb-2">Senior Developer</h3>
            <p className="text-gray-600">Led development of multiple high-impact projects</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;