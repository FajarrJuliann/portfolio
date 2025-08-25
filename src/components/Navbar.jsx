import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", href: "/#hero" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const sectionId = href.split("#")[1]; // Extract the section ID (e.g., "hero")
    const element = document.getElementById(sectionId);

    if (element && location.pathname === "/") {
      // If on the home page, scroll to the section
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after click
    } else {
      // Navigate to the home page with the hash
      window.location.href = href;
    }
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.nav
      className="bg-gray-900 shadow-neon-cyan p-4 sticky top-0 z-20"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold text-cyan-300 font-orbitron">
          Fajar Julian
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `text-lg font-poppins ${
                    isActive
                      ? "text-cyan-300 shadow-neon-cyan-text"
                      : "text-gray-300 hover:text-cyan-300 hover:shadow-neon-cyan-text"
                  } transition duration-300`
                }
                onClick={(e) => handleScroll(e, item.href)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-300 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          className="md:hidden mt-4 space-y-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `block text-lg font-poppins text-center ${
                    isActive
                      ? "text-cyan-300 shadow-neon-cyan-text"
                      : "text-gray-300 hover:text-cyan-300 hover:shadow-neon-cyan-text"
                  } transition duration-300`
                }
                onClick={(e) => handleScroll(e, item.href)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}

export default Navbar;
