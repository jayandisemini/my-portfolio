import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { contactInfo, socials } from "@/data/contact";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      subtitle="Have an opportunity, project, or just want to say hi? Drop a message."
    >
      <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="glass p-6">
            <h3 className="font-bold text-lg mb-2">Reach me directly</h3>
            <a href={`mailto:${contactInfo.email}`} className="text-accent hover:underline text-sm">
              {contactInfo.email}
            </a>
            <p className="text-sm text-muted-foreground mt-4">{contactInfo.location}</p>
          </div>
          <div className="glass p-6">
            <h3 className="font-bold text-lg mb-4">Find me online</h3>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl glass grid place-items-center hover:bg-gradient-to-br hover:from-primary hover:to-secondary transition-all hover:-translate-y-1"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3000);
            (e.target as HTMLFormElement).reset();
          }}
          className="lg:col-span-3 glass p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium block mb-2">Name</label>
              <input
                required
                maxLength={100}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-2">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium block mb-2">Message</label>
            <textarea
              required
              maxLength={1000}
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium glow-primary hover:scale-105 transition-transform"
          >
            {sent ? (
              "Message sent ✓"
            ) : (
              <>
                Send message <Send size={16} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
