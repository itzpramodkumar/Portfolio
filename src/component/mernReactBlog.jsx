import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";

function ReactPerformanceBlog() {

const [progress,setProgress] = useState(0);

useEffect(()=>{

const handleScroll = () => {

const totalHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const scroll = window.scrollY;

const percent = (scroll / totalHeight) * 100;

setProgress(percent);

};

window.addEventListener("scroll",handleScroll);

return ()=> window.removeEventListener("scroll",handleScroll);

},[]);

return (

<section className="bg-black text-white min-h-screen">

{/* Progress Bar */}

<div
className="fixed top-0 left-0 h-[4px] bg-cyan-400 z-50"
style={{width:`${progress}%`}}
/>

<div className="max-w-5xl mx-auto px-6 py-16">

{/* Back Button */}

<Link
to="/"
className="flex items-center gap-2 text-cyan-400 mb-8 hover:text-cyan-300"
>
<ArrowLeft size={18}/>
Back
</Link>

{/* Blog Image */}

<img
src="https://images.unsplash.com/photo-1518770660439-4636190af475"
alt="react performance"
className="rounded-xl mb-10 w-full"
/>

{/* Title */}

<h1 className="text-4xl font-bold mb-6 text-cyan-400">
React Performance Optimization
</h1>

{/* Author */}

<div className="flex gap-6 text-gray-400 mb-10">

<div className="flex items-center gap-2">
<User size={16}/>
Pramod Kumar
</div>

<div className="flex items-center gap-2">
<Calendar size={16}/>
10 Mar 2026
</div>

</div>

{/* Article */}

<div className="space-y-6 text-gray-300 leading-relaxed">

<h2 className="text-2xl font-semibold text-white">
Introduction
</h2>

<p>
React applications fast hoti hain lekin jab application large ho jati hai
to performance issues aa sakte hain. React performance optimization ka goal
hai unnecessary renders ko reduce karna aur application ko smooth banana.
</p>

<h2 className="text-2xl font-semibold text-white">
Common Performance Problems
</h2>

<ul className="list-disc ml-6 space-y-2">

<li>Unnecessary component re-rendering</li>
<li>Large component trees</li>
<li>Heavy calculations inside components</li>
<li>Improper state management</li>

</ul>

<h2 className="text-2xl font-semibold text-white">
Optimization Techniques
</h2>

<h3 className="text-xl font-semibold text-cyan-400">
React.memo()
</h3>

<p>
React.memo functional components ko memoize karta hai aur unnecessary
re-renders ko prevent karta hai.
</p>

<pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
<code>
{`const MyComponent = React.memo(function MyComponent(props) {
  return <div>{props.name}</div>
})`}
</code>
</pre>

<h3 className="text-xl font-semibold text-cyan-400">
useMemo()
</h3>

<p>
useMemo heavy calculations ko cache karta hai jisse unnecessary
recalculations avoid ho jati hain.
</p>

<pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
<code>
{`const result = useMemo(() => {
 return expensiveCalculation(data)
}, [data])`}
</code>
</pre>

<h3 className="text-xl font-semibold text-cyan-400">
useCallback()
</h3>

<p>
useCallback functions ko memoize karta hai jisse child components
unnecessary re-render nahi hote.
</p>

<pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
<code>
{`const handleClick = useCallback(() => {
 console.log("clicked")
}, [])`}
</code>
</pre>

<h2 className="text-2xl font-semibold text-white">
Conclusion
</h2>

<p>
Proper optimization techniques use karke React applications ko
fast aur scalable banaya ja sakta hai.
</p>

</div>

</div>

</section>

);

}

export default ReactPerformanceBlog;