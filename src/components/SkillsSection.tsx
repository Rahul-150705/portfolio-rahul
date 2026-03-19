import { useScrollReveal } from "./useScrollReveal";

const skillGroups = [
  { title: "Languages", skills: ["Java", "Python", "SQL"] },
  { title: "Frameworks", skills: ["Spring Boot", "Spring MVC", "React.js", "REST APIs", "Microservices"] },
  { title: "Tools & DB", skills: ["MySQL", "Git", "GitHub", "Postman", "VS Code"] },
  { title: "Concepts", skills: ["DSA", "OOP", "System Design"] },
];

const SkillsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-secondary/30">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="section-heading text-center">Tech <span className="text-gradient">Stack</span></h2>
        <p className="section-subheading text-center">Technologies I work with</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass-card p-5">
              <h3 className="font-semibold text-sm text-primary font-mono mb-3 uppercase tracking-wider">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span key={s} className="px-3 py-1.5 text-xs font-medium rounded-md bg-muted text-foreground border border-border hover:border-primary/40 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
