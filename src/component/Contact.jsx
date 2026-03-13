
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_6vxh945", // 🔹 Replace with your Service ID
        "template_edb08y5", // 🔹 Replace with your Template ID
        form.current,
        "LwAIUF_KD3FRPFZ-w" // 🔹 Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);

          setLoading(false);
          setSent(true);

          form.current.reset();

          setTimeout(() => {
            setSent(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Email send failed. Check console.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-transparent text-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400 text-transparent bg-clip-text"
        >
          Get In Touch
        </motion.h2>

        {/* Robot Icon */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mb-12 text-cyan-400 text-5xl"
        >
          <FaRobot />
        </motion.div>

        {/* Form */}
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative p-[2px] rounded-2xl bg-gradient-to-r from-purple-500/40 via-cyan-400/40 to-blue-500/40"
        >
          <div className="bg-black/40 backdrop-blur-xl p-10 rounded-2xl space-y-7 border border-white/10">

            {/* Inputs */}
            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
              />

            </div>

            <textarea
              rows="5"
              name="message"
              placeholder="Write your message..."
              required
              className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-lg font-semibold tracking-wide bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 hover:scale-[1.02] hover:shadow-[0_0_25px_#22d3ee] transition-all duration-300"
            >
              {loading ? "Sending..." : "🚀 Send Message"}
            </button>

            {/* Success Message */}
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-center pt-3"
              >
                ✅ Message Sent Successfully
              </motion.p>
            )}

          </div>
        </motion.form>

      </div>
    </section>
  );
}

export default Contact;

