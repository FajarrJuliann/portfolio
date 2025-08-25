import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../components/Logo";
import ProgressBar from "../components/ProgressBar";
import "../styles/SplashScreen.css";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timer to redirect to the home page after 3 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glowing background orb effect */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-transparent to-transparent blur-3xl"></div>

      <div className="text-center px-4 sm:px-6 md:px-8 z-10">
        <Logo />

        {/* Glowing Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-cyan-300 mb-4 tracking-tight font-orbitron shadow-neon-cyan-text"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Welcome!
        </motion.h1>

        {/* Glowing Subtitle */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-neon-pink opacity-90 max-w-md mx-auto font-poppins shadow-neon-pink-text"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Fajar Julian's Portfolio
        </motion.p>

        <ProgressBar />
      </div>
    </motion.div>
  );
}

export default SplashScreen;
