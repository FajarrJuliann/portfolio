import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function ContactSection() {
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setShowToast(true);

    setTimeout(() => {
      setLoading(false);
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      {/* ===== Toast ===== */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 120 }}
            transition={{ duration: 0.3 }}
            className="fixed top-6 right-6 z-50"
          >
            <div className="flex items-center gap-3 px-5 py-3 bg-gray-900 border border-cyan-500/30 text-cyan-300 rounded-lg shadow-lg">
              <span className="text-lg">🚧</span>
              <span className="font-medium">
                This feature is under development
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Section ===== */}
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
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-cyan-300"
            variants={itemVariants}
          >
            Contact
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={itemVariants}
          >
            {/* ===== Map ===== */}
            <motion.div
              className="rounded-lg overflow-hidden border border-cyan-500/20 shadow-lg"
              variants={itemVariants}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.296153139062!2d106.8039575!3d-6.593095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5d1e1cabe01%3A0xe061286f14ca6345!2sJl.%20Pendidikan%2056-18%2C%20Bogor!5e0!3m2!1sid!2sid!4v1692635523456"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "24rem" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location"
              />
            </motion.div>

            {/* ===== Form ===== */}
            <motion.div
              className="
                bg-gray-900 p-6 rounded-lg
                border border-cyan-500/20
                shadow-lg
                hover:border-cyan-400/40
                transition
              "
              variants={itemVariants}
            >
              <p className="text-gray-300 mb-6 text-center">
                Send me a message!
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {["name", "email"].map((field) => (
                  <motion.div key={field} variants={itemVariants}>
                    <label className="block text-gray-300 mb-2">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      disabled={loading}
                      required
                      className="
                        w-full p-3 rounded-md
                        bg-gray-800 text-gray-200
                        border border-cyan-500/20
                        focus:outline-none
                        focus:ring-2 focus:ring-cyan-400/40
                        disabled:opacity-50
                      "
                    />
                  </motion.div>
                ))}

                <motion.div variants={itemVariants}>
                  <label className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    disabled={loading}
                    required
                    className="
                      w-full p-3 rounded-md
                      bg-gray-800 text-gray-200
                      border border-cyan-500/20
                      focus:outline-none
                      focus:ring-2 focus:ring-cyan-400/40
                      disabled:opacity-50
                    "
                  />
                </motion.div>

                {/* ===== Button ===== */}
                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      w-full p-3 flex items-center justify-center gap-2
                      bg-cyan-500/90 text-gray-900 font-semibold
                      rounded-md
                      hover:bg-cyan-400
                      transition
                      shadow-md
                      disabled:opacity-60
                      disabled:cursor-not-allowed
                    "
                  >
                    {loading && (
                      <span className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                    )}
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default ContactSection;
