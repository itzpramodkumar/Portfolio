import { motion } from "framer-motion";

function GithubStats() {
  return (
    <section
      id="github"
      className="relative py-20 md:py-24 px-4 sm:px-6 bg-transparent overflow-hidden"
    >

      {/* background glow */}

      <div className="absolute w-[400px] md:w-[500px] h-[400px] md:h-[500px] blur-[180px] md:blur-[200px] -top-32 -left-32"></div>
      <div className="absolute w-[400px] md:w-[500px] h-[400px] md:h-[500px] blur-[180px] md:blur-[200px] -bottom-32 -right-32"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="border border-cyan-400/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(34,211,238,0.1)] text-center"
        >

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-14 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text"
          >
            GitHub Status
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border border-white/10 rounded-2xl p-4 w-full max-w-md mx-auto"
            >
              <img
                src="https://github-readme-stats.vercel.app/api?username=itzpramodkumar&show_icons=true&theme=tokyonight"
                alt="github stats"
                className="w-full"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border border-white/10 rounded-2xl p-4 w-full max-w-md mx-auto"
            >
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=itzpramodkumar&theme=tokyonight"
                alt="github streak"
                className="w-full"
              />
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default GithubStats;