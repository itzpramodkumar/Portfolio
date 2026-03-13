


import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

const techIcons = [
  { icon: <FaReact />, color: "#61DBFB" },
  { icon: <FaNodeJs />, color: "#3C873A" },
  { icon: <SiMongodb />, color: "#4DB33D" },
  { icon: <SiJavascript />, color: "#F7DF1E" },
  { icon: <FaGitAlt />, color: "#F1502F" },
  { icon: <FaGithub />, color: "#ffffff" },
  { icon: <SiExpress />, color: "#cccccc" },
  { icon: <SiTailwindcss />, color: "#38BDF8" },
  { icon: <FaDocker />, color: "#2496ED" },
  { icon: <SiRedux />, color: "#764abc" },
];

function TechBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {Array.from({ length: 35 }).map((_, i) => {
        const random = techIcons[Math.floor(Math.random() * techIcons.length)];

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;

        const duration = 25 + Math.random() * 25;
        const size = 20 + Math.random() * 40;

        return (
          <motion.div
            key={i}
            initial={{
              x: startX,
              y: startY,
              opacity: 0.25,
              scale: 0.8,
            }}
            animate={{
              y: [startY, startY - 300, startY],
              x: [startX, startX + 120, startX],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              fontSize: size,
              color: random.color,
              filter: "drop-shadow(0 0 10px rgba(255,255,255,0.25))",
            }}
            className="absolute"
          >
            {random.icon}
          </motion.div>
        );
      })}
    </div>
  );
}

export default TechBackground;