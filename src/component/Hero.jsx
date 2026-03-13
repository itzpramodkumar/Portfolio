import img from "../assets/img/p4.png";
import resumeFile from "../assets/resume/pramod[mern stack].pdf"

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 md:px-6 pt-28 md:pt-32 pb-10"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        
        {/* LEFT TEXT */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[var(--text-main)]">
            Hi, I'm Pramod Kumar
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-[var(--text-soft)]">
            MERN Stack Developer
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="primary-btn rounded-xl px-7 py-3 font-semibold"
            >
              View Projects
            </a>

            <a
              href={resumeFile}
              download
              className="outline-btn rounded-xl px-7 py-3 font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[320px] sm:w-[380px] lg:w-[420px]">

            {/* glow background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr  to-transparent blur-2xl" />

            {/* glass card */}
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_20px_80px_rgba(59,130,246,0.35)]">

              <img
                src={img}
                alt="Pramod portfolio hero"
                className="w-full h-[420px] object-cover opacity-95"
              />

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;