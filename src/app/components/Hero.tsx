import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-6">
      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-7xl mb-6 text-slate-900">
            Hi, I'm <span className="text-blue-600">Alex Morgan</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8">
            Creative Developer & Designer
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12">
            I craft beautiful digital experiences with a focus on user-centric
            design and clean code. Specializing in web development, UI/UX
            design, and everything in between.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </button>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20"
        >
          <button
            onClick={scrollToProjects}
            className="text-slate-400 hover:text-slate-600 transition-colors animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
