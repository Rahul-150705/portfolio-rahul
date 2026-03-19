import { GraduationCap } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const EducationSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="education" className="py-24 px-4 sm:px-6">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="section-heading text-center">Education</h2>
        <p className="section-subheading text-center">Academic background</p>
        <div className="glass-card p-6 md:p-8 max-w-2xl mx-auto glow-border flex items-start gap-5">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <GraduationCap className="text-primary" size={28} />
          </div>
          <div>
            <h3 className="font-bold text-lg">Bannari Amman Institute of Technology</h3>
            <p className="text-muted-foreground text-sm mt-1">B.E. Computer Science and Design</p>
            <div className="flex flex-wrap gap-4 mt-3 text-sm">
              <span className="text-primary font-mono font-semibold">CGPA: 7.6 / 10.0</span>
              <span className="text-muted-foreground">2023 – 2027</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
