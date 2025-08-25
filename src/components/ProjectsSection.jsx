import { motion } from "framer-motion";

function ProjectsSection() {
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

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my work and skills",
      image: "/assets/project1.png",
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration",
      image: "/assets/project2.png",
      link: "#",
    },
    {
      title: "Task Manager",
      description: "A productivity app for task organization and tracking",
      image: "/assets/project3.png",
      link: "#",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-black to-gray-900"
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
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-neon-cyan"
              variants={itemVariants}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-cyan-300 shadow-neon-cyan-text">
                  {project.title}
                </h3>
                <p className="text-cyan-300 mb-4 shadow-neon-cyan-text">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="text-cyan-300 hover:text-cyan-200 shadow-neon-cyan-text"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
