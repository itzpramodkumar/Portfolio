import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";

const About = () => {
  const skills = [
    {
      icon: <FaReact />,
      name: "React",
      color: "text-cyan-400",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      color: "text-green-400",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      color: "text-green-500",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      color: "text-yellow-400",
    },
  ];

  return (
    <section
      id="about"
      className="relative px-6 py-24 bg-transparent overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute w-[500px] h-[500px]  blur-[200px] -top-32 -left-32"></div>
      <div className="absolute w-[500px] h-[500px] blur-[200px] -bottom-32 -right-32"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* card container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="border border-cyan-400/20 rounded-3xl p-12 text-center shadow-[0_0_40px_rgba(34,211,238,0.1)]"
        >

          {/* heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text"
          >
            About Me
          </motion.h2>

          {/* description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            I am a passionate MERN Stack Developer who loves building modern,
            scalable and high performance web applications using React,
            Node.js, MongoDB and JavaScript.
          </motion.p>

          {/* skills */}
          <div className="flex flex-wrap justify-center gap-10">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.15 }}
                className="flex items-center gap-4 px-8 py-4 rounded-xl
                border border-white/10
                hover:bg-white/10 transition-all duration-500"
              >
                <span
                  className={`text-3xl ${skill.color} transition-transform duration-500 hover:rotate-[360deg]`}
                >
                  {skill.icon}
                </span>

                <span className="text-gray-200 font-medium tracking-wide">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;