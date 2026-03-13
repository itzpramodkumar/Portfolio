import { useEffect, useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.remove("light");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const navLinks = [
    "About",
    "Skills",
    "Projects",
    "Resume",
    "Blog",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-4 md:px-6 py-4 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl flex items-center justify-between rounded-full glass-card px-6 py-3 border border-white/10 shadow-lg">

        {/* LOGO */}
        <a
          href="#home"
          className="text-lg md:text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
        >
          Pramod.dev
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm lg:text-base text-[var(--text-soft)]">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              className="relative group"
            >
              {link}

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-3">

          {/* THEME TOGGLE */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full glass-card text-lg"
          >
            {darkMode ? <FaMoon /> : <FaSun />}
          </motion.button>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-[var(--text-main)] text-xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mx-auto mt-3 max-w-7xl rounded-2xl glass-card px-6 py-6"
          >
            <div className="flex flex-col gap-5 text-[var(--text-soft)] text-lg">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-[var(--primary)] transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;