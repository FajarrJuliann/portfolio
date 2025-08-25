import { motion } from "framer-motion";

function ExperienceSection() {
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

  const experiences = [
    {
      role: "Frontend Developer",
      company: "Tech Corp",
      period: "2023 - Present",
      description:
        "Developed responsive web applications using React and Tailwind CSS.",
    },
    {
      role: "Junior Developer",
      company: "StartUp Inc",
      period: "2021 - 2023",
      description: "Contributed to full-stack development of internal tools.",
    },
  ];

  return (
    <motion.section
      id="experience"
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
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-neon-cyan"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-cyan-300 shadow-neon-cyan-text">
                {exp.role}
              </h3>
              <p className="text-cyan-300 shadow-neon-cyan-text">
                {exp.company}
              </p>
              <p className="text-cyan-300 mb-2 shadow-neon-cyan-text">
                {exp.period}
              </p>
              <p className="text-cyan-300 shadow-neon-cyan-text">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ExperienceSection;
