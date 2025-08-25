function Contact() {
  return (
    <section className="min-h-screen p-8 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Hubungi Saya
      </h2>
      <form className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Nama"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Pesan"
          className="w-full p-2 mb-4 border rounded h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full"
        >
          Kirim
        </button>
      </form>
      {/* Tambahkan integrasi EmailJS jika perlu */}
    </section>
  );
}

export default Contact;
