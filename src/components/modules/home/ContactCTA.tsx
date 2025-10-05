export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-[#f9f9f9] text-center px-6">
      <h2 className="text-3xl font-bold mb-6 text-green-600">Let’s Connect</h2>
      <p className="text-gray-700 mb-6">
        Interested in collaborating or hiring me? Let’s build something great
        together!
      </p>
      <a
        href="mailto:isratjahan@email.com"
        className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
      >
        Contact Me
      </a>
    </section>
  );
}
