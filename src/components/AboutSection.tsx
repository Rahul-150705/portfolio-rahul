import { Code, Server, Brain } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="section-heading text-center">About <span className="text-gradient">Me</span></h2>
        <p className="section-subheading text-center">Pre-final year CS student passionate about building impactful software</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Code, title: "Full Stack Dev", desc: "Building scalable applications with Java, Spring Boot, React.js, and REST APIs." },
            { icon: Server, title: "Backend & Systems", desc: "Strong in DSA, OOP, System Design, and Microservices architecture." },
            { icon: Brain, title: "ML Integration", desc: "Integrating ML models into production systems for intelligent automation." },
          ].map((item, i) => (
            <div key={i} className="glass-card p-6 hover:glow-border transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
