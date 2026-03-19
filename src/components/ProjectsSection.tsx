import { Github, ExternalLink } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const projects = [
  {
    title: "iMockInterviewAI",
    period: "Sep 2025 – Nov 2025",
    desc: "AI-Powered Interview Preparation Platform with NLP question generation and real-time analytics.",
    stack: ["Java", "Spring Boot", "MySQL", "REST APIs", "NLP"],
    highlights: ["85% NLP accuracy", "Concurrent sessions", "Real-time analytics"],
    github: "https://github.com/Rahul-150705/mockinterview-backend",
  },
  {
    title: "RenewAI",
    period: "Jun 2025 – Present",
    desc: "Intelligent Insurance Renewal Automation System with ML prediction and multi-channel notifications.",
    stack: ["Java", "Spring Boot", "Python", "MySQL", "React.js", "WhatsApp API"],
    highlights: ["40% lapse reduction", "95% delivery rate", "78% ML accuracy", "500+ policies"],
    github: "https://github.com/Rahul-150705/renew-ai",
  },
];

const ProjectsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="section-heading text-center">Featured <span className="text-gradient">Projects</span></h2>
        <p className="section-subheading text-center">Things I've built</p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="glass-card overflow-hidden group hover:glow-border transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-primary to-primary-glow" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold text-xl">{p.title}</h3>
                  <a href={p.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                </div>
                <p className="text-xs text-muted-foreground font-mono mb-3">{p.period}</p>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-mono">{t}</span>
                  ))}
                </div>
                <ul className="space-y-1">
                  {p.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
