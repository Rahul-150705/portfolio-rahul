import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <ParticleBackground />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="fade-up">
          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">Hello, I'm</p>
        </div>
        <h1 className="fade-up fade-up-delay-1 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 font-display">
          Rahul <span className="text-gradient">P</span>
        </h1>
        <p className="fade-up fade-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-3 font-mono">
          Software Development Engineer
        </p>
        <p className="fade-up fade-up-delay-2 text-sm text-muted-foreground font-mono mb-8">
          Java · Spring Boot · Full Stack
        </p>
        <p className="fade-up fade-up-delay-3 text-muted-foreground max-w-xl mx-auto mb-10">
          Pre-final year CS student building scalable full-stack applications. Open-source contributor & hackathon award winner.
        </p>
        <div className="fade-up fade-up-delay-3 flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-[var(--shadow-glow)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors"
          >
            Contact Me
          </a>
        </div>
        <div className="fade-up fade-up-delay-3 flex justify-center gap-5">
          <a href="https://github.com/Rahul-150705" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/rahul-p-61a437291/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href="mailto:rahulpalanisamy@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={22} />
          </a>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce" aria-label="Scroll down">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
