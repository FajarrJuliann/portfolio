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
      role: "Intern Fullstack Web & Mobile Developer",
      company: "Communication and Information Office (Kominfo), Payakumbuh City",
      period: "October 2023 – January 2024",
      description:
        "Worked as a Fullstack Web & Mobile Developer intern, handling the development and maintenance of web and mobile applications, implementing frontend and backend features, and supporting government digital services through cross-platform solutions.",
    },
    {
      role: "Fullstack Web & Mobile Developer",
      company: "PT Jamkrida Jabar",
      period: "October 2024 – August 2025",
      description:
        "Worked full-time as a Fullstack Web & Mobile Developer, responsible for building, maintaining, and optimizing web and mobile applications, developing RESTful APIs, and delivering responsive and scalable solutions to support business processes.",
    },
    {
      role: "IT Support (Web & Mobile Systems)",
      company: "IPB University",
      period: "September 2025 – Present",
      description:
        "Providing IT support for web and mobile systems, including application maintenance, system troubleshooting, and technical support to ensure reliable operation of digital services across the university environment.",
    },
    {
      role: "Fullstack Web & Mobile Developer",
      company: "Abujapi Jabar (Vendor)",
      period: "February 2025 – Present",
      description:
        "Working as a Fullstack Web & Mobile Developer vendor, handling end-to-end development of web and mobile applications, integrating backend services, and collaborating with stakeholders to deliver efficient and scalable digital solutions.",
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
          className="text-3xl sm:text-4xl font-bold text-center mb-12 
                     text-cyan-400 shadow-neon-cyan-text"
          variants={itemVariants}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg 
                         border border-cyan-500/30
                         shadow-[0_0_18px_rgba(34,211,238,0.25)]"
              variants={itemVariants}
            >
              {/* POSISI PEKERJAAN (NEON) */}
              <h3
                className="text-xl font-semibold text-cyan-400
                           drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              >
                {exp.role}
              </h3>

              {/* NON-NEON */}
              <p className="text-gray-400">{exp.company}</p>
              <p className="text-gray-500 mb-2">{exp.period}</p>
              <p className="text-gray-400">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ExperienceSection;
 