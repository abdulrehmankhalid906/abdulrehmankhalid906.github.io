import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const socialLinks = [
    { icon: <Mail />, label: "Email", href: "mailto:alex@example.com" },
    { icon: <Linkedin />, label: "LinkedIn", href: "#" },
    { icon: <Github />, label: "GitHub", href: "#" },
    { icon: <Twitter />, label: "Twitter", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6">Let's Work Together</h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>

          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <a
            href="mailto:alex@example.com"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-800 text-slate-400 text-sm"
        >
          <p>© 2026 Alex Morgan. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
