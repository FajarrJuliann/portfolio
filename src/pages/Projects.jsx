function Projects() {
  const projects = [
    {
      title: "Proyek 1",
      desc: "Deskripsi singkat",
      link: "https://github.com/username/proyek1",
    },
    // Tambahkan proyek lain
  ];

  return (
    <section className="min-h-screen p-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Proyek Saya
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{proj.title}</h3>
            <p className="text-gray-600 mt-2">{proj.desc}</p>
            <a
              href={proj.link}
              className="text-blue-600 hover:underline mt-4 block"
            >
              Lihat Proyek
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
