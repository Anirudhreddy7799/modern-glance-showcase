import { Card } from "@/components/ui/card";

const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#333333]">Experience Highlights</h2>
        <div className="space-y-4">
          <Card className="p-6 bg-white/10 backdrop-blur hover:bg-white/20 transition-all border-white/20">
            <h3 className="text-xl font-semibold mb-2 text-[#444444]">Senior Developer</h3>
            <p className="text-[#555555]">Led development of multiple high-impact projects</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;