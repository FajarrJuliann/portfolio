import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function ContactSection() {
  const [alert, setAlert] = useState({ show: false, message: "" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const alertVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert({ show: true, message: "Sedang dalam pengembangan!" });
    setTimeout(() => setAlert({ show: false, message: "" }), 3000);
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-900 to-black"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-cyan-300 shadow-neon-cyan-text"
          variants={itemVariants}
        >
          Contact
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
          variants={itemVariants}
        >
          {/* Map Section */}
          <motion.div
            className="w-full h-full rounded-lg overflow-hidden shadow-neon-cyan"
            variants={itemVariants}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.296153139062!2d106.80395751477094!3d-6.593094995242058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5d1e1cabe01%3A0xe061286f14ca6345!2sJl.%20Pendidikan%2056-18%2C%20RT.03%2FRW.01%2C%20Babakan%2C%20Kecamatan%20Bogor%20Tengah%2C%20Kota%20Bogor%2C%20Jawa%20Barat%2016128!5e0!3m2!1sid!2sid!4v1692635523456!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "24rem" }}
              allowFullScreen=""
              loading="lazy"
              title="Lokasi Jl. Pendidikan 56-18, Bogor"
            ></iframe>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            className="bg-gray-900 p-6 rounded-lg shadow-neon-cyan flex flex-col justify-between"
            variants={itemVariants}
          >
            <div>
              <AnimatePresence>
                {alert.show && (
                  <motion.div
                    variants={alertVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="mb-8 p-4 bg-gray-900 border-l-4 border-cyan-500 text-cyan-300 rounded-lg shadow-neon-cyan"
                    role="alert"
                  >
                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 mr-2 text-cyan-300 shadow-neon-cyan-text"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="font-semibold text-cyan-300 shadow-neon-cyan-text">
                        {alert.message}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.p
                className="text-cyan-300 mb-6 text-center shadow-neon-cyan-text"
                variants={itemVariants}
              >
                Send me a message!
              </motion.p>
            </div>
            <form className="space-y-4 flex-1" onSubmit={handleSubmit}>
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-cyan-300 shadow-neon-cyan-text mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-md bg-gray-800 text-cyan-300 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 shadow-neon-cyan-text"
                  placeholder="Your Name"
                  required
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-cyan-300 shadow-neon-cyan-text mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-md bg-gray-800 text-cyan-300 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 shadow-neon-cyan-text"
                  placeholder="Your Email"
                  required
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-cyan-300 shadow-neon-cyan-text mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 rounded-md bg-gray-800 text-cyan-300 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 shadow-neon-cyan-text"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </motion.div>
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="w-full p-3 bg-cyan-500 text-gray-900 font-semibold rounded-md hover:bg-cyan-400 transition duration-300 shadow-neon-cyan"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ContactSection;
