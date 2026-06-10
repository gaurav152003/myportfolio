import { useState } from "react";

const skills = [
  { name: "HTML5", logo: "/assets/Logos/html5.svg", category: "frontend" },
  { name: "CSS3", logo: "/assets/Logos/css3.svg", category: "frontend" },
  {
    name: "JavaScript",
    logo: "/assets/Logos/javascript.svg",
    category: "frontend",
  },
  { name: "React.js", logo: "/assets/Logos/react.svg", category: "frontend" },
  { name: "Redux", logo: "/assets/Logos/redux.svg", category: "frontend" },
  {
    name: "Tailwind CSS",
    logo: "/assets/Logos/tailwindcss.svg",
    category: "frontend",
  },
  {
    name: "Bootstrap",
    logo: "/assets/Logos/Bootstrap_logo.svg",
    category: "frontend",
  },
  {
    name: "Three.js",
    logo: "/assets/Logos/Three.js.svg",
    category: "frontend",
  },

  { name: "Java", logo: "/assets/Logos/java.svg", category: "backend" },
  {
    name: "Spring Boot",
    logo: "/assets/Logos/Spring_Boot.svg",
    category: "backend",
  },
  { name: "Node.js", logo: "/assets/Logos/Node.js.svg", category: "backend" },
  {
    name: "Express.js",
    logo: "/assets/Logos/Express.svg",
    category: "backend",
  },
  { name: "MySQL", logo: "/assets/Logos/mysql.svg", category: "backend" },
  { name: "MongoDB", logo: "/assets/Logos/MongoDB.svg", category: "backend" },

  { name: "Git", logo: "/assets/Logos/git.svg", category: "tools" },
  { name: "GitHub", logo: "/assets/Logos/github.svg", category: "tools" },
  { name: "Postman", logo: "/assets/Logos/postman.svg", category: "tools" },
  { name: "VS Code", logo: "/assets/Logos/vscode.svg", category: "tools" },
  { name: "Vercel", logo: "/assets/Logos/vercel.svg", category: "tools" },
  { name: "Render", logo: "/assets/Logos/render.svg", category: "tools" },
];

export default function Skills() {
  const [filter, setFilter] = useState("all");

  const filteredSkills =
    filter === "all"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  return (
    <section id="skills" className="c-space py-20">
      <div className="text-center">
        <h2 className="text-heading" style={{ textShadow: "0 2px 2px white" }}>
          Technical Skills
        </h2>

        <p
          className="subtext mt-4 max-w-3xl mx-auto"
          style={{ fontSize: "18px" }}
        >
          Technologies and tools I use to build scalable, modern, and
          high-performance applications.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {["all", "frontend", "backend", "tools"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 capitalize
              ${
                filter === item
                  ? "bg-blue-500 text-white border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.7)]"
                  : "border-neutral-700 text-neutral-300 hover:border-blue-500 hover:text-blue-400"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-12">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="
              group
              flex flex-col items-center justify-center
              gap-3
              p-5
              rounded-2xl
              border border-neutral-800
              bg-black/20
              backdrop-blur-sm
              transition-all duration-300
              hover:border-blue-500
              hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]
              hover:-translate-y-2
            "
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="bg-white rounded w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />

            <p className="text-sm md:text-base text-blue-500 font-medium text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
