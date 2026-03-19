import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const ContactSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-secondary/30">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="section-heading text-center">Get In <span className="text-gradient">Touch</span></h2>
        <p className="section-subheading text-center">Let's connect and build something great</p>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {[
            { icon: Mail, label: "Email", value: "rahulpalanisamy@gmail.com", href: "mailto:rahulpalanisamy@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91-9999451074", href: "tel:+919999451074" },
            { icon: Github, label: "GitHub", value: "Rahul-150705", href: "https://github.com/Rahul-150705" },
            { icon: Linkedin, label: "LinkedIn", value: "Rahul P", href: "https://www.linkedin.com/in/rahul-p-61a437291/" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="glass-card p-5 flex items-center gap-4 hover:glow-border transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} />
            Dharapuram, Tamil Nadu, India
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
