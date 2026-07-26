import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, BookOpen, Users, Activity, ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/Section";

type GitHubUserData = {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  avatar_url: string;
  html_url: string;
  bio: string;
};

export function GitHubStats() {
  const [userData, setUserData] = useState<GitHubUserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/jayandisemini")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.public_repos !== undefined) {
          setUserData(data);
        }
      })
      .catch((err) => console.error("GitHub API Error:", err))
      .finally(() => setLoading(false));
  }, []);

  const statsList = [
    {
      label: "Public Repositories",
      value: userData ? userData.public_repos : "12+",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-500",
    },
    {
      label: "GitHub Followers",
      value: userData ? userData.followers : "10+",
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Code Stars & Forks",
      value: "15+",
      icon: Star,
      color: "from-amber-400 to-orange-500",
    },
    {
      label: "Active Contributions",
      value: "Daily",
      icon: Activity,
      color: "from-emerald-400 to-teal-500",
    },
  ];

  return (
    <Section
      id="github"
      eyebrow="Open Source"
      title="GitHub Activity & Stats"
      subtitle="Live metrics and contributions from my official GitHub developer profile."
    >
      <div className="space-y-8">
        {/* Metric Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsList.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass p-5 border border-white/10 flex items-center gap-4 hover:border-primary/40 transition-all shadow-lg"
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} grid place-items-center text-white shrink-0 shadow-md`}
              >
                <stat.icon size={22} />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-foreground tracking-tight">
                  {loading ? "..." : stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Stats Graphic Widgets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* GitHub Overall Stats Widget */}
          <div className="glass p-6 border border-white/10 flex flex-col justify-between overflow-hidden shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Github size={20} className="text-primary" /> Profile Statistics
              </h3>
              <a
                href="https://github.com/jayandisemini"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-accent hover:underline flex items-center gap-1 font-medium"
              >
                @jayandisemini <ExternalLink size={12} />
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden bg-black/20 p-2 flex justify-center items-center">
              <img
                src="https://github-readme-stats.vercel.app/api?username=jayandisemini&show_icons=true&theme=transparent&hide_border=true&title_color=818cf8&icon_color=c084fc&text_color=94a3b8"
                alt="Jayandi Semini GitHub Stats"
                className="w-full max-w-md h-auto object-contain"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Top Languages Widget */}
          <div className="glass p-6 border border-white/10 flex flex-col justify-between overflow-hidden shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <GitFork size={20} className="text-secondary" /> Most Used Languages
              </h3>
              <span className="text-xs text-muted-foreground font-medium">Auto-updated</span>
            </div>
            <div className="rounded-2xl overflow-hidden bg-black/20 p-2 flex justify-center items-center">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=jayandisemini&layout=compact&theme=transparent&hide_border=true&title_color=818cf8&text_color=94a3b8"
                alt="Top Languages"
                className="w-full max-w-md h-auto object-contain"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
