
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import thankyouAudio from "../assets/audio/footer.mp3.mp3";

const Footer = () => {

const scrollTop = () => {
window.scrollTo({
top:0,
behavior:"smooth"
})
}

const footerRef = useRef(null);
const audioRef = useRef(null);
const playedRef = useRef(false);

useEffect(() => {

const observer = new IntersectionObserver(
(entries) => {

const entry = entries[0];

if (entry.isIntersecting && !playedRef.current) {

audioRef.current.play();
playedRef.current = true;

// stop after 7 seconds
setTimeout(() => {
audioRef.current.pause();
audioRef.current.currentTime = 0;
}, 10000);

}

},
{
threshold:0.9
}
);

if(footerRef.current){
observer.observe(footerRef.current);
}

return () => {
if(footerRef.current){
observer.unobserve(footerRef.current);
}
};

},[]);

return (

<section
ref={footerRef}
className="relative py-20 md:py-24 px-4 sm:px-6 bg-transparent overflow-hidden text-white"
>

{/* hidden audio */}

<audio ref={audioRef} src={thankyouAudio} preload="auto"/>

<div className="max-w-7xl mx-auto relative z-10">

<motion.div
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.6 }}
className="border border-cyan-400/20 rounded-3xl p-6 sm:p-8 md:p-12 shadow-[0_0_40px_rgba(34,211,238,0.1)] text-center"
>

<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text">
Thanks for Visiting My Portfolio <span>🙌</span> 
</h2>

<p className="text-gray-400 max-w-xl mx-auto mb-10">
I truly appreciate you taking the time to explore my work.
If you have an idea, project, or collaboration in mind,
let's build something amazing together.
</p>


{/* CTA BUTTON */}

<motion.a
href="#contact"
whileHover={{ scale: 1.05 }}
className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition mb-10"
>
Let's Build Something Together 🚀
</motion.a>


{/* SOCIAL ICONS */}

<div className="flex justify-center gap-6 mb-10">

<a
href="https://github.com/"
target="_blank"
className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 text-white text-xl hover:text-cyan-400 hover:scale-110 transition"
>
<FaGithub/>
</a>

<a
href="https://linkedin.com/"
target="_blank"
className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 text-white text-xl hover:text-cyan-400 hover:scale-110 transition"
>
<FaLinkedin/>
</a>

</div>


{/* SCROLL BUTTON */}

<button
onClick={scrollTop}
className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition"
>

Back To Top
<FaArrowUp/>

</button>


{/* COPYRIGHT */}

<p className="text-gray-500 text-sm mt-10">
© {new Date().getFullYear()} Pramod Kumar • MERN Stack Developer
</p>

</motion.div>

</div>

</section>

)

}

export default Footer;

