import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "React", level: 90, color: "from-blue-500 to-indigo-500" },
    { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
    { name: "MongoDB", level: 80, color: "from-emerald-400 to-green-700" },
    { name: "JavaScript", level: 75, color: "from-yellow-400 to-orange-500" },
    { name: "Tailwind CSS", level: 85, color: "from-cyan-400 to-blue-500" },
    { name: "Express.js", level: 80, color: "from-gray-400 to-gray-600" },
  ];

  return (
    <section
      id="skills"
      className="relative px-6 py-24 bg-transparent overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute w-[500px] h-[500px] blur-[200px] -top-32 -left-32"></div>
      <div className="absolute w-[500px] h-[500px] blur-[200px] -bottom-32 -right-32"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* main card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="border border-cyan-400/20 rounded-3xl p-12 shadow-[0_0_40px_rgba(34,211,238,0.1)]"
        >

          {/* heading */}
          <h2 className="text-5xl font-bold text-center mb-14 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text">
            My Skills
          </h2>

          {/* skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative p-5 sm:p-6 rounded-xl bg-[#0f172a] border border-slate-700 hover:border-blue-500 transition group"
              >

                {/* neon glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 blur-xl"></div>

                <div className="relative z-10">

                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold tracking-wide text-sm sm:text-base">
                      {skill.name}
                    </span>

                    <span className="text-gray-400 text-sm">
                      {skill.level}%
                    </span>
                  </div>

                  {/* progress bar */}
                  <div className="w-full h-3 sm:h-4 bg-slate-700 rounded-full overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                    />

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Skills;