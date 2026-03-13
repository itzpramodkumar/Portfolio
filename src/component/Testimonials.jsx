import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaLinkedin } from "react-icons/fa";

import img1 from "../assets/img/harsh.jpeg";
import img2 from "../assets/img/pinku.jpeg";
import img3 from "../assets/img/naveen.png";
import img4 from "../assets/img/akhtar ali.jpeg";
import img5 from "../assets/img/nitin.jpeg";
import img6 from "../assets/img/deepanshu.jpeg";

import "swiper/css";

function Testimonials() {

const testimonials = [

{
name:"Engg Nitin Chauhan",
message:"Pramod is a talented MERN developer and builds amazing web applications.",
image: img5,
linkedin:"https://www.linkedin.com/in/nitin-chauhan-51aa4733b/"
},

{
name:"Engg Naveen Gautam",
message:"Very professional developer. His projects are clean and scalable.",
image: img3,
linkedin:"https://www.linkedin.com/in/thenaveengautam/"
},

{
name:"Sr. Software Eng. Akhtar Ali",
message:"Great work ethic and strong understanding of full stack development.",
image: img4,
linkedin:"https://www.linkedin.com/in/akhtar-ali-3866a210a/"
},

{
name:"Engg Pinku Mourya",
message:"Pramod delivers high quality full stack applications with modern UI and strong backend logic.",
image: img2,
linkedin:"https://www.linkedin.com/in/pinku-maurya-076b95184/"
},

{
name:"Software Eng. Deepanshu Garg",
message:"Amazing developer with great knowledge of React and Node.js. Highly recommended for web projects.",
image: img6,
linkedin:"https://www.linkedin.com/in/deepanshu-garg-b48202113/"
},

{
name:" Engg Harsh Grewal",
message:"Very creative developer. His portfolio and UI design skills are outstanding.",
image: img1,
linkedin:"https://www.linkedin.com/in/harshgrewal1309/"
}

]

return(

<section
id="testimonials"
className="py-28 px-6 bg-transparent text-white"
>

<div className="max-w-6xl mx-auto text-center">

<h2 className="text-4xl font-bold mb-16">
Engineers <span className="text-blue-400">Testimonials</span>
</h2>

<Swiper
modules={[Autoplay]}
spaceBetween={30}
loop={true}
autoplay={{ delay: 3500 }}
breakpoints={{
640:{slidesPerView:1},
768:{slidesPerView:2},
1024:{slidesPerView:3}
}}
>

{testimonials.map((item,index)=>(

<SwiperSlide key={index}>

<div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl overflow-hidden shadow-lg transition duration-500 hover:-translate-y-3">

{/* hover glow */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-purple-500/10 blur-xl"></div>

{/* quote */}
<FaQuoteLeft className="text-blue-400 text-2xl mb-4 relative z-10"/>

<p className="text-gray-300 mb-6 text-sm relative z-10">
{item.message}
</p>

{/* user */}
<a
href={item.linkedin}
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-3 relative z-10 hover:scale-105 transition"
>

<img
src={item.image}
alt={item.name}
className="w-10 h-10 rounded-full object-cover border border-blue-400"
/>

<div className="flex items-center gap-2">

<h3 className="text-blue-400 font-semibold">
{item.name}
</h3>

<FaLinkedin className="text-blue-500"/>

</div>

</a>

</div>

</SwiperSlide>

))}

</Swiper>

</div>

</section>

)

}

export default Testimonials;