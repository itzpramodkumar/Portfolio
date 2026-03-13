
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";

function TailwindAdvancedBlog() {

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

      {/* Progress Bar */}

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
          src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2"
          alt="Tailwind CSS"
          className="rounded-xl mb-10 w-full"
        />

        {/* Title */}

        <h1 className="text-4xl font-bold mb-6 text-cyan-400">
          Tailwind CSS Advanced Tricks
        </h1>

        {/* Author */}

        <div className="flex gap-6 text-gray-400 mb-10">

          <div className="flex items-center gap-2">
            <User size={16} />
            Pramod Kumar
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={16} />
            15 Mar 2026
          </div>

        </div>

        {/* Blog Content */}

        <div className="space-y-6 text-gray-300 leading-relaxed">

          <h2 className="text-2xl font-semibold text-white">
            Introduction
          </h2>

          <p>
            Tailwind CSS ek utility-first CSS framework hai jo developers
            ko fast aur responsive UI banane me help karta hai. Lekin
            Tailwind me kuch advanced tricks bhi hain jo development
            ko aur powerful bana dete hain.
          </p>

          <h2 className="text-2xl font-semibold text-white">
            1. Custom Utility Classes
          </h2>

          <p>
            Tailwind config file me custom utilities add karke reusable
            styles create kiye ja sakte hain.
          </p>

          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code>
{`module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4"
      }
    }
  }
}`}
            </code>
          </pre>

          <h2 className="text-2xl font-semibold text-white">
            2. Group Hover Effects
          </h2>

          <p>
            Tailwind ka <strong>group</strong> utility use karke parent hover
            ke basis par child elements animate kar sakte hain.
          </p>

          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code>
{`<div class="group">
  <p class="group-hover:text-cyan-400">
    Hover Effect
  </p>
</div>`}
            </code>
          </pre>

          <h2 className="text-2xl font-semibold text-white">
            3. Responsive Design
          </h2>

          <p>
            Tailwind me responsive design banana bahut easy hai.
            Breakpoints use karke alag screen sizes ke liye styles
            define kiye ja sakte hain.
          </p>

          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code>
{`<div class="text-sm md:text-lg lg:text-2xl">
  Responsive Text
</div>`}
            </code>
          </pre>

          <h2 className="text-2xl font-semibold text-white">
            4. Dark Mode Support
          </h2>

          <p>
            Tailwind CSS me built-in dark mode support hota hai jisse
            dark theme easily implement kiya ja sakta hai.
          </p>

          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code>
{`<div class="bg-white dark:bg-black">
  Dark Mode Example
</div>`}
            </code>
          </pre>

          <h2 className="text-2xl font-semibold text-white">
            Conclusion
          </h2>

          <p>
            Tailwind CSS advanced tricks use karke developers fast,
            scalable aur maintainable UI build kar sakte hain.
            Agar aap Tailwind ko deeply samajh lete hain to aap
            extremely powerful frontend layouts bana sakte hain.
          </p>

        </div>

      </div>

    </section>

  );
}

export default TailwindAdvancedBlog;

