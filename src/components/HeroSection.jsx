import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";

function HeroSection() {
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

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/fajarjulian",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: "GitLab",
      href: "https://gitlab.com/fajarjulian",
      icon: <FaGitlab className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/fajarjulian",
      icon: <FaInstagram className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/fajarjulian",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
  ];

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text and Social Buttons */}
        <div className="text-left">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-300 mb-6 tracking-tight font-orbitron shadow-neon-cyan-text"
            variants={itemVariants}
          >
            WELCOME TO MY <br /> PORTFOLIO
          </motion.h1>
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-300 mb-6 shadow-neon-cyan-text"
            variants={itemVariants}
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-cyan-300 mb-8 max-w-md shadow-neon-cyan-text"
            variants={itemVariants}
          >
            Crafting scalable, user-friendly web and mobile solutions
          </motion.p>
          <motion.div className="flex space-x-3" variants={itemVariants}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-cyan-300 hover:text-cyan-200 hover:shadow-neon-cyan transition duration-300 shadow-neon-cyan-text"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Logo */}
        <div className="flex justify-center">
          <motion.div
            className="mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 120,
              damping: 10,
            }}
          >
            <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mx-auto shadow-neon-cyan">
              <img
                src="/assets/fajar.jpeg"
                alt="Fajar Portfolio Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
