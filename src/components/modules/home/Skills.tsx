const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Node.js",
  "MongoDB",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white text-center px-6">
      <h2 className="text-3xl font-bold mb-8 text-green-600">My Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((s, i) => (
          <span
            key={i}
            className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
