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
      title: "Company Profile Abujapi Jabar",
      description:
        "Official company profile website for Abujapi Jabar, presenting organizational information, services, and activities.",
      image: "/assets/abujapi-landingpage.png",
      link: "https://bpdabujapijabar.or.id/",
    },
    {
      title: "CMS Abujapi Jabar",
      description:
        "Content Management System to manage news, articles, and website content for Abujapi Jabar.",
      image: "/assets/abujapi-cms.png",
      link: "https://admin.bpdabujapijabar.or.id/",

    },

    {
      title: "HRMIS Abujapi Jabar",
      description:
        "Human Resource Management Information System for employee data, attendance, and HR administration.",
      image: "/assets/abujapi-hrmis.png",
      link: "https://hrmis.bpdabujapijabar.or.id/",
    },
    {
      title: "Attendance Application Abujapi Jabar",
      description:
        "Attendance application to record employee presence and support daily operational monitoring.",
      image: "/assets/abujapi-absen.jpeg",
      link: "#",
    },
    {
      title: "Company Profile International Research Institute – IPB University",
      description:
        "Official company profile website for the International Research Institute of IPB University, showcasing research activities, collaborations, and institutional information.",
      image: "/assets/ipb-compro.png",
      link: "#",
    },
    {
      title: "Sistem Informasi Surat dan Kearsipan (SITALAS) Jamkrida Jabar",
      description:
        "Information system for managing incoming and outgoing correspondence, document archiving, and digital letter administration at Jamkrida Jabar.",
      image: "/assets/project3.png",
      link: "#",
    },


  ];

  return (
    <motion.section
      id="projects"
      className="py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-900 to-black"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-cyan-400 shadow-neon-cyan-text"
          variants={itemVariants}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="
  bg-gray-900
  rounded-lg
  overflow-hidden
  border border-cyan-500/20
  shadow-lg
  hover:border-cyan-400/40
  hover:shadow-cyan-500/20
  transition
"

              variants={itemVariants}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400 shadow-neon-cyan-text">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition shadow-neon-cyan-text"
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