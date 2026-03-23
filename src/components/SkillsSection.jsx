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
  // Web Development
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",

  // Mobile Development
  "Flutter",
  "Dart",
  "Android Development",
  "iOS Development",

  // Backend Development
  "Node.js",
  "Express.js",
  "Laravel",
  "RESTful API",
  // "Authentication & Authorization",

  // Database
  "PostgreSQL",
  "MySQL",
  // "MongoDB",

  // Cloud & DevOps
  "Cloud Server Management",
  "Docker",
  // "Docker Compose",
  "CI/CD",
  "Nginx",
  "Server Deployment",

  // Tools & Collaboration
  "Git",
  "GitHub",
  "GitLab",
  "Version Control",
  "API Integration",
];


  return (
    <motion.section
  id="skills"
  className="py-20 px-4 sm:px-6 md:px-8 
             bg-gradient-to-br from-slate-900 to-black"
>
  <motion.h2
    className="text-3xl sm:text-4xl font-bold text-center mb-12 
               text-cyan-400 shadow-neon-cyan-text-soft"
  >
    Skills
  </motion.h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        className="bg-slate-900 p-4 rounded-lg text-center 
                   shadow-neon-cyan-soft"
      >
        <p className="text-lg font-semibold text-cyan-400">
          {skill}
        </p>
      </motion.div>
    ))}
  </div>
</motion.section>

  );
}

export default SkillsSection;
