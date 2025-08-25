import { motion } from "framer-motion";

function ProgressBar() {
  return (
    <motion.div
      className="mt-10 max-w-md mx-auto"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
    >
      <div className="h-1 bg-gradient-to-r from-cyan-400 to-neon-pink rounded-full w-full shadow-neon-pink"></div>
    </motion.div>
  );
}

export default ProgressBar;
