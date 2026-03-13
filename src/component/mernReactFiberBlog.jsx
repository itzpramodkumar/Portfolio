
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";

function ReactFiberBlog() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scroll = window.scrollY;

      const percent = (scroll / totalHeight) * 100;

      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <section className="bg-black text-white min-h-screen">

      {/* Reading Progress Bar */}

      <div
        className="fixed top-0 left-0 h-[4px] bg-cyan-400 z-50"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Back Button */}

        <Link
          to="/"
          className="flex items-center gap-2 text-cyan-400 mb-8 hover:text-cyan-300"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        {/* Blog Image */}

        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="React Fiber"
          className="rounded-xl mb-10 w-full"
        />

        {/* Title */}

        <h1 className="text-4xl font-bold mb-6 text-cyan-400">
          How React Fiber Works Internally
        </h1>

        {/* Author + Date */}

        <div className="flex gap-6 text-gray-400 mb-10">

          <div className="flex items-center gap-2">
            <User size={16} />
            Pramod Kumar
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={16} />
            8 Mar 2026
          </div>

        </div>

        {/* Blog Content */}

        <div className="space-y-6 text-gray-300 leading-relaxed">

          <h2 className="text-2xl font-semibold text-white">
            Introduction
          </h2>

          <p>
            React Fiber React ka modern reconciliation engine hai jo React 16
            me introduce hua tha. Iska main goal rendering process ko fast
            aur smooth banana hai.
          </p>

          <h2 className="text-2xl font-semibold text-white">
            Problem With Old React
          </h2>

          <p>
            React ke purane versions synchronous rendering use karte the.
            Jab rendering start hoti thi to React poora component tree ek
            saath render karta tha jisse UI freeze ho sakti thi.
          </p>

          <h2 className="text-2xl font-semibold text-white">
            What is React Fiber
          </h2>

          <p>
            React Fiber ek new algorithm hai jo rendering ko small tasks
            me divide karta hai. Isse React rendering ko pause, resume
            aur prioritize kar sakta hai.
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Incremental rendering</li>
            <li>Task prioritization</li>
            <li>Smooth animations</li>
            <li>Better performance</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white">
            Example Component
          </h2>

          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code>
{`function App(){
  return(
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}`}
            </code>
          </pre>

          <h2 className="text-2xl font-semibold text-white">
            Concurrent Rendering
          </h2>

          <p>
            React Fiber concurrent rendering support karta hai jisse
            high priority tasks pehle execute ho sakte hain aur UI
            responsive rehti hai.
          </p>

          <h2 className="text-2xl font-semibold text-white">
            Conclusion
          </h2>

          <p>
            React Fiber React ka core architecture hai jo modern
            applications ko fast aur scalable banata hai.
          </p>

        </div>

      </div>

    </section>

  );
}

export default ReactFiberBlog;

