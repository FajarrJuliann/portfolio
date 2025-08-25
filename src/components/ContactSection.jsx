import { motion } from "framer-motion";

function ContactSection() {
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

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 sm:px-6 md:px-8 bg-gray-800"
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
        <motion.div className="max-w-md mx-auto" variants={itemVariants}>
          <p className="text-gray-300 mb-6 text-center">
            Feel free to reach out for collaboration or inquiries!
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:fajar@example.com"
                className="text-cyan-400 hover:text-cyan-300"
              >
                fajar@example.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <a
                href="https://linkedin.com/in/fajarjulian"
                className="text-cyan-400 hover:text-cyan-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ContactSection;
