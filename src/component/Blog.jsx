import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogData = [
  {
    id: 1,
    title: "Mastering MERN Stack in 2026",
    desc: "Learn how to build scalable full stack applications using MongoDB, Express, React and Node.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    author: "Pramod Kumar",
    date: "12 Mar 2026",
  },
  {
    id: 2,
    title: "React Performance Optimization",
    desc: "Understand reconciliation, diffing algorithm and advanced optimization techniques.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    author: "Pramod Kumar",
    date: "10 Mar 2026",
  },
  {
    id: 3,
    title: "How React Fiber Works Internally",
    desc: "Deep dive into React Fiber architecture and concurrent rendering system.",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e",
    author: "Pramod Kumar",
    date: "8 Mar 2026",
  },
  {
    id: 4,
    title: "Tailwind CSS Advanced Tricks",
    desc: "Create modern UI faster with advanced Tailwind CSS techniques.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    author: "Pramod Kumar",
    date: "6 Mar 2026",
  },
];

const Blog = () => {
  return (
    <section
      className="relative py-20 md:py-24 px-4 sm:px-6 bg-transparent overflow-hidden text-white"
    >

      {/* background glow */}

      <div className="absolute w-[400px] md:w-[500px] h-[400px] md:h-[500px]  blur-[180px] md:blur-[200px] -top-32 -left-32"></div>
      <div className="absolute w-[400px] md:w-[500px] h-[400px] md:h-[500px]  blur-[180px] md:blur-[200px] -bottom-32 -right-32"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="border border-cyan-400/20 rounded-3xl p-6 sm:p-8 md:p-12 shadow-[0_0_40px_rgba(34,211,238,0.1)]"
        >

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-14 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text">
            Latest Blogs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

            {blogData.map((blog, index) => (

              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.2 }}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-500 hover:border-cyan-400"
              >

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 sm:h-44 md:h-48 object-cover"
                />

                <div className="p-5 md:p-6 transition duration-500 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-cyan-400/20">

                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 mb-5 text-sm sm:text-base">
                    {blog.desc}
                  </p>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 mb-5">

                    <div className="flex items-center gap-2">
                      <User size={16}/>
                      {blog.author}
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar size={16}/>
                      {blog.date}
                    </div>

                  </div>

                  {/* BUTTON */}

                  <button className="flex items-center gap-2 px-5 py-2 rounded-lg border border-white/20 relative overflow-hidden group-hover:border-cyan-400 transition">

                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition"></span>

                    <span className="relative flex items-center gap-2 text-sm">
                      Read Article
                      <ArrowRight size={16}/>
                    </span>

                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Blog;