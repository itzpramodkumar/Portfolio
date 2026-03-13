import { motion } from "framer-motion"
import img from "../assets/img/p4.png"
import resumeFile from "../assets/resume/pramod[mern stack].pdf"

function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center px-4 md:px-6 pt-28 md:pt-32 pb-10 overflow-hidden"
    >

      {/* floating background glow */}

      <div className="pointer-events-none absolute w-[500px] h-[500px] bg-blue-500/20 blur-[200px] -top-40 -left-40 animate-pulse"/>
      <div className="pointer-events-none absolute w-[500px] h-[500px] bg-cyan-400/20 blur-[200px] -bottom-40 -right-40 animate-pulse"/>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* LEFT TEXT */}

        <motion.div
          initial={{opacity:0, y:80}}
          animate={{opacity:1, y:0}}
          transition={{duration:1}}
          className="text-center lg:text-left"
        >

          <motion.h1
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.3}}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[var(--text-main)]"
          >
            Hi, I'm Pramod Kumar
          </motion.h1>

          <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.5}}
            className="mt-4 text-xl md:text-2xl text-[var(--text-soft)]"
          >
            MERN Stack Developer
          </motion.p>

          <motion.div
            initial={{opacity:0, y:40}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.7}}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >

            <motion.a
              whileHover={{scale:1.08}}
              whileTap={{scale:0.95}}
              href="#projects"
              className="primary-btn rounded-xl px-7 py-3 font-semibold"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{scale:1.08}}
              whileTap={{scale:0.95}}
              href={resumeFile}
              download
              className="outline-btn rounded-xl px-7 py-3 font-semibold"
            >
              Download Resume
            </motion.a>

          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}

        <div className="flex justify-center lg:justify-end">

          <motion.div
            initial={{opacity:0, scale:0.8}}
            animate={{opacity:1, scale:1}}
            transition={{duration:1}}
            whileHover={{rotateY:8, rotateX:5}}
            className="relative w-[320px] sm:w-[380px] lg:w-[420px]"
          >

            {/* rotating gradient ring */}

            <motion.div
              animate={{rotate:360}}
              transition={{repeat:Infinity, duration:20, ease:"linear"}}
              className="pointer-events-none absolute inset-0 rounded-[40px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 blur-xl opacity-60"
            />

            {/* floating particles */}

            <motion.div
              animate={{y:[0,-20,0]}}
              transition={{repeat:Infinity, duration:4}}
              className="pointer-events-none absolute -top-6 -left-6 w-6 h-6 bg-cyan-400 rounded-full blur-md"
            />

            <motion.div
              animate={{y:[0,20,0]}}
              transition={{repeat:Infinity, duration:5}}
              className="pointer-events-none absolute -bottom-6 -right-6 w-6 h-6 bg-blue-500 rounded-full blur-md"
            />

            {/* glass card */}

            <motion.div
              whileHover={{scale:1.05}}
              transition={{type:"spring", stiffness:200}}
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_20px_100px_rgba(59,130,246,0.45)]"
            >

              <motion.img
                src={img}
                alt="Pramod portfolio hero"
                className="w-full h-[420px] object-cover opacity-95"
                animate={{y:[0,-10,0]}}
                transition={{repeat:Infinity, duration:6}}
              />

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Hero