import { motion } from "framer-motion";

function SkillsSection() {
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

  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "HTML/CSS",
    "Git",
    "MongoDB",
    "Python",
  ];

  return (
    <motion.section
      id="skills"
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
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-4 rounded-lg text-center shadow-neon-cyan"
              variants={itemVariants}
            >
              <p className="text-lg font-semibold text-cyan-300 shadow-neon-cyan-text">
                {skill}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default SkillsSection;
