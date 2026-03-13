// import { Canvas, useFrame } from "@react-three/fiber";
// import { useRef, useMemo } from "react";

// function Stars() {
//   const mesh = useRef();

//   // create stars only once (performance)
//   const starPositions = useMemo(() => {
//     const positions = new Float32Array(5000 * 3);

//     for (let i = 0; i < 5000; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 200;
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
//     }

//     return positions;
//   }, []);

//   useFrame(({ clock }) => {
//     if (mesh.current) {
//       mesh.current.rotation.y += 0.0005;
//       mesh.current.rotation.x += 0.0002;

//       // twinkling animation
//       mesh.current.material.size =
//         0.4 + Math.sin(clock.elapsedTime * 2) * 0.1;
//     }
//   });

//   return (
//     <points ref={mesh}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={starPositions.length / 3}
//           array={starPositions}
//           itemSize={3}
//         />
//       </bufferGeometry>

//       <pointsMaterial
//         size={0.5}
//         color="#ffffff"
//         sizeAttenuation
//         depthWrite={false}
//       />
//     </points>
//   );
// }

// function Spacebackground() {
//   return (
//     <div className="fixed inset-0 -z-50">
//       <Canvas camera={{ position: [0, 0, 5] }}>
//         <ambientLight intensity={0.6} />
//         <Stars />
//       </Canvas>
//     </div>
//   );
// }

// export default Spacebackground;

// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaGithub,
//   FaDocker
// } from "react-icons/fa";

// import {
//   SiMongodb,
//   SiJavascript,
//   SiExpress,
//   SiTailwindcss,
//   SiFirebase
// } from "react-icons/si";

// const icons = [
//   { icon: <FaReact />, color: "#61DBFB" },
//   { icon: <FaNodeJs />, color: "#3C873A" },
//   { icon: <SiMongodb />, color: "#4DB33D" },
//   { icon: <SiJavascript />, color: "#F7DF1E" },
//   { icon: <FaGitAlt />, color: "#F1502F" },
//   { icon: <FaGithub />, color: "#ffffff" },
//   { icon: <SiExpress />, color: "#aaaaaa" },
//   { icon: <SiTailwindcss />, color: "#38BDF8" },
//   { icon: <FaDocker />, color: "#2496ED" },
//   { icon: <SiFirebase />, color: "#FFA611" },
// ];

// function TechBackground() {
//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

//       {Array.from({ length: 40 }).map((_, i) => {
//         const randomIcon = icons[Math.floor(Math.random() * icons.length)];

//         const x = Math.random() * window.innerWidth;
//         const y = Math.random() * window.innerHeight;
//         const duration = 20 + Math.random() * 30;

//         return (
//           <motion.div
//             key={i}
//             initial={{ x, y, opacity: 0.6 }}
//             animate={{
//               y: [y, y - 200, y],
//               x: [x, x + 100, x],
//               rotate: [0, 360],
//             }}
//             transition={{
//               duration,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="absolute text-3xl md:text-4xl opacity-40"
//             style={{ color: randomIcon.color }}
//           >
//             {randomIcon.icon}
//           </motion.div>
//         );
//       })}

//     </div>
//   );
// }

// export default TechBackground;


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