import { motion } from "framer-motion";

function Logo() {
  return (
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
      <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mx-auto shadow-neon-cyan">
        <img
          src="/assets/fajar.jpeg"
          alt="Fajar Portfolio Logo"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </motion.div>
  );
}

export default Logo;
