import { Orbiting } from "./Orbiting";

export function Frameworks() {
  const skills = [
    "html5",
    "css3",
    "javascript",
    "react",
    "Three.js",
    "github",
    "vscode",
    "MongoDB",
    "Node.js",
    "tailwindcss",
    "Express",
    "mysql",
    "vercel",
    "Spring_Boot",
    "redux",
    "postman",
    "claude",
    "java",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <Orbiting iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/Logos/${skill}.svg`} />
        ))}
      </Orbiting>
      <Orbiting iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/Logos/${skill}.svg`} />
        ))}
      </Orbiting>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
