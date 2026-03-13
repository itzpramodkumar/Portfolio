import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import img from "../assets/img/portfolio.webp"
import img1 from "../assets/img/petrol.webp"
import img2 from "../assets/img/denom .png"
function Projects() {

const projects = [

{
title:"Fuel Management System",
desc:"A MERN stack application for managing petrol pump fuel sales and reports.",
image:img1,
github:"https://github.com/itzpramodkumar/Mern_FullStack_Project",
live:"#"
},

{
title:"Portfolio Website",
desc:"Personal developer portfolio built using React and Tailwind CSS.",
image:img,
github:"https://github.com/itzpramodkumar/Portfolio",
live:"#"
},

{
title:"Denom Tech Pvt ltd",
desc:"A full stack software company application with authentication and CRUD features.",
image:img2,
github:"#",
live:"#"
}

]

return(

<section
id="projects"
className="relative py-20 md:py-24 px-4 sm:px-6 bg-transparent overflow-hidden"
>

{/* background glow */}

<div className="absolute w-[400px] md:w-[500px] h-[400px] md:h-[500px] blur-[180px] md:blur-[200px] -top-32 -left-32"/>
<div className="absolute w-[400px] md:w-[500px] h-[400px] md:h-[500px] blur-[180px] md:blur-[200px] -bottom-32 -right-32"/>

<div className="max-w-7xl mx-auto relative z-10">

<motion.div
initial={{opacity:0,scale:0.9}}
whileInView={{opacity:1,scale:1}}
transition={{duration:0.6}}
className="border border-cyan-400/20 rounded-3xl p-6 sm:p-8 md:p-12 shadow-[0_0_40px_rgba(34,211,238,0.1)]"
>

<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-14 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text">
My Projects
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

{projects.map((project,index)=>(

<motion.div
key={index}
whileHover={{scale:1.05}}
className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-500 hover:border-cyan-400"
>

<img
src={project.image}
className="w-full h-40 sm:h-44 md:h-48 object-cover"
/>

<div className="p-5 md:p-6 transition duration-500 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-cyan-400/20">

<h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
{project.title}
</h3>

<p className="text-gray-400 mb-5 text-sm sm:text-base">
{project.desc}
</p>

<div className="flex flex-col sm:flex-row gap-3">

<a
href={project.live}
target="_blank"
rel="noopener noreferrer"
className="px-4 py-2 text-center bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg hover:shadow-[0_0_15px_#22d3ee] transition"
>
Live Demo
</a>

<a
href={project.github}
target="_blank"
rel="noopener noreferrer"
className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition flex items-center justify-center gap-2"
>
<FaGithub/>
Code
</a>

</div>

</div>

</motion.div>

))}

</div>

</motion.div>

</div>

</section>

)

}

export default Projects;