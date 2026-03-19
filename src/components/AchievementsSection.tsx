import { Trophy, GitPullRequest, Code2, Award } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const achievements = [
  { icon: Trophy, title: "3rd Prize", desc: "Industry Innovation Hackathon 2026", color: "text-yellow-400" },
  { icon: GitPullRequest, title: "Open Source Contributor", desc: "TheAlgorithms/Java (50,000+ ⭐)", link: "https://github.com/TheAlgorithms/Java/pull/6532" },
  { icon: Code2, title: "LeetCode", desc: "200+ Problems Solved" },
  { icon: Award, title: "HackerRank Certified", desc: "Java (Basic)" },
  { icon: Award, title: "HackerRank Certified", desc: "SQL", link: "https://www.hackerrank.com/certificates/8b09af5b7a19" },
];

const AchievementsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 bg-secondary/30">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="section-heading text-center">Achievements</h2>
        <p className="section-subheading text-center">Milestones along the way</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <div key={i} className="glass-card p-5 flex items-start gap-4 hover:glow-border transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <a.icon className={a.color || "text-primary"} size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{a.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{a.desc}</p>
                {a.link && (
                  <a href={a.link} target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline mt-1 inline-block font-mono">
                    View →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
