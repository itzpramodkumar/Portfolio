import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft } from "lucide-react";

const blogPosts = [
{
id:"mern",
title:"Mastering MERN Stack in 2026",
image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c",
date:"12 Mar 2026",
author:"Pramod Kumar",
content:`
Introduction

MERN Stack modern web development ka ek powerful technology stack hai jisme MongoDB, Express.js, React.js aur Node.js use kiye jate hain. Yeh developers ko full stack JavaScript applications banane ki ability deta hai.

Why MERN Stack?

MERN stack ka sabse bada advantage hai ki poora development JavaScript me hota hai. Isse development fast ho jata hai aur code maintain karna easy hota hai.

Main Technologies

MongoDB – NoSQL database jo flexible data storage provide karta hai.

Express.js – Backend framework jo APIs build karne me help karta hai.

React.js – Frontend library jo fast UI rendering provide karti hai.

Node.js – Server-side runtime environment.

Benefits

• Fast Development  
• Large Developer Community  
• Scalable Architecture  
• Reusable Components  

Conclusion

Agar tum modern web applications banana chahte ho to MERN stack ek best option hai jo scalable aur high performance applications develop karne me help karta hai.
`
},

{
id:"react-performance",
title:"React Performance Optimization",
image:"https://images.unsplash.com/photo-1518770660439-4636190af475",
date:"10 Mar 2026",
author:"Pramod Kumar",
content:`
Introduction

React applications me performance optimization bahut important hota hai especially jab application large ho jati hai.

Avoid Unnecessary Rendering

React.memo() aur useMemo() ka use karke unnecessary rendering ko avoid kiya ja sakta hai.

Code Splitting

Large applications ko smaller chunks me divide karne ke liye React.lazy() aur Suspense ka use kiya jata hai.

Virtual DOM

React ka Virtual DOM fast updates provide karta hai jisse UI rendering efficient ho jati hai.

Conclusion

Proper optimization techniques use karke React applications ko fast aur scalable banaya ja sakta hai.
`
},

{
id:"react-fiber",
title:"How React Fiber Works Internally",
image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",
date:"8 Mar 2026",
author:"Pramod Kumar",
content:`
Introduction

React Fiber React ka new reconciliation engine hai jo rendering process ko improve karta hai.

Problem in Old React

Old React architecture synchronous rendering use karta tha jisse heavy UI updates slow ho jate the.

Fiber Architecture

Fiber asynchronous rendering allow karta hai jisse UI smooth ho jati hai aur animations better ho jati hain.

Concurrent Rendering

React Fiber concurrent rendering support karta hai jisse high priority tasks pehle render ho sakte hain.

Conclusion

React Fiber modern React applications ko fast aur responsive banata hai.
`
}
];

function BlogDetails(){

const { id } = useParams();

const post = blogPosts.find(blog => blog.id === id);

if(!post){
return <div className="text-white text-center py-20">Article Not Found</div>
}

return(

<section className="min-h-screen bg-black text-white px-6 py-16">

<div className="max-w-4xl mx-auto">

<Link
to="/"
className="flex items-center gap-2 text-cyan-400 mb-10 hover:text-cyan-300"
>
<ArrowLeft size={18}/>
Back
</Link>

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
>

<img
src={post.image}
alt={post.title}
className="w-full h-[350px] object-cover rounded-xl mb-8"
/>

<h1 className="text-4xl font-bold mb-4 text-cyan-400">
{post.title}
</h1>

<div className="flex gap-6 text-gray-400 mb-10">

<div className="flex items-center gap-2">
<User size={16}/>
{post.author}
</div>

<div className="flex items-center gap-2">
<Calendar size={16}/>
{post.date}
</div>

</div>

<div className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
{post.content}
</div>

</motion.div>

</div>

</section>

)

}

export default BlogDetails;