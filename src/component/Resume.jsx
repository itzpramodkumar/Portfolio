
import { motion } from "framer-motion";
import resumeFile from "../assets/resume/pramod[mern stack].pdf"
const Resume = () => {
  return (
    <section
      id="resume"
      className="relative px-4 sm:px-6 py-20 md:py-24 bg-transparent overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute w-[400px] md:w-[500px] h-[400px] md:h-[500px] blur-[180px] md:blur-[200px] -top-32 -left-32"></div>
      <div className="absolute w-[400px] md:w-[500px] h-[400px] md:h-[500px]  blur-[180px] md:blur-[200px] -bottom-32 -right-32"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">

        {/* main glass card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="border border-cyan-400/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(34,211,238,0.1)] backdrop-blur-xl"
        >

          {/* heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-14 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text"
          >
            My Resume
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* resume preview */}
            <div className="flex justify-center">

              <motion.div
                whileHover={{ rotateX: 8, rotateY: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative group w-[200px] sm:w-[240px] md:w-[260px]"
                style={{ perspective: 1000 }}
              >

                {/* page 3 */}
                <motion.div
                  className="absolute w-full h-full bg-white/60 backdrop-blur rounded-2xl shadow-xl"
                  initial={{ rotate: 6, y: 12 }}
                  whileHover={{ rotate: 12, y: 30 }}
                  transition={{ duration: 0.4 }}
                />

                {/* page 2 */}
                <motion.div
                  className="absolute w-full h-full bg-white/70 backdrop-blur rounded-2xl shadow-xl"
                  initial={{ rotate: 3, y: 6 }}
                  whileHover={{ rotate: 6, y: 18 }}
                  transition={{ duration: 0.4 }}
                />

                {/* main resume */}
                <motion.div
                  className="relative bg-white/90 backdrop-blur rounded-2xl p-5 sm:p-6 shadow-2xl"
                  whileHover={{ y: -6 }}
                >

                  <div className="flex items-center gap-3 border-b pb-4">

                    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                      PK
                    </div>

                    <div>
                      <h3 className="text-slate-800 font-bold text-sm sm:text-base">
                        Pramod Kumar
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm">
                        MERN Stack Developer
                      </p>
                    </div>

                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="h-2 rounded bg-slate-200"></div>
                    <div className="h-2 rounded bg-slate-200 w-[80%]"></div>
                    <div className="h-2 rounded bg-slate-200 w-[70%]"></div>
                    <div className="h-2 rounded bg-slate-200 w-[85%]"></div>
                    <div className="h-2 rounded bg-slate-200 w-[60%]"></div>
                  </div>

                </motion.div>

              </motion.div>

            </div>

            {/* text */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">

              <p className="mb-6 text-gray-400 text-sm sm:text-base max-w-md">
                Download or view my professional resume including my projects,
                MERN stack skills and development experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

                <a
                  href={resumeFile}
                  download
                  className="px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 font-semibold hover:shadow-[0_0_20px_#22d3ee] transition text-center"
                >
                  Download CV
                </a>

                <a
                  href={resumeFile}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 sm:px-8 py-3 rounded-xl border border-cyan-400/30 hover:bg-cyan-400/10 transition text-center"
                >
                  View Resume
                </a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Resume;

