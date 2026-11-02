import {
  SiReact, SiTailwindcss, SiJavascript, SiTypescript, SiC, SiCplusplus, SiPython, SiRust, SiPhp,
  SiNodedotjs, SiExpress, SiNextdotjs, SiAngular, SiExpo, SiWordpress, SiMysql, SiMongodb, SiRedis,
  SiCpanel, SiDocker, SiLinux, SiGit, SiQiskit, SiNumpy, SiNumba,
} from "react-icons/si";

const icons = {
  React: [SiReact, "text-cyan-400"],
  "Tailwind CSS": [SiTailwindcss, "text-sky-400"],
  JavaScript: [SiJavascript, "text-yellow-400"],
  TypeScript: [SiTypescript, "text-blue-400"],
  "C++": [SiCplusplus, "text-blue-300"],
  C: [SiC, "text-blue-300"],
  Python: [SiPython, "text-yellow-300"],
  Rust: [SiRust, "text-orange-300"],
  PHP: [SiPhp, "text-indigo-300"],
  "Node.js": [SiNodedotjs, "text-green-400"],
  Express: [SiExpress, "text-gray-200"],
  "Next.js": [SiNextdotjs, "text-gray-200"],
  Angular: [SiAngular, "text-red-400"],
  "React Native (Expo)": [SiExpo, "text-gray-200"],
  WordPress: [SiWordpress, "text-sky-300"],
  SQL: [SiMysql, "text-sky-300"],
  MongoDB: [SiMongodb, "text-green-400"],
  Redis: [SiRedis, "text-red-400"],
  "WHM / cPanel": [SiCpanel, "text-orange-400"],
  Docker: [SiDocker, "text-sky-400"],
  Linux: [SiLinux, "text-gray-200"],
  Git: [SiGit, "text-orange-400"],
  Qiskit: [SiQiskit, "text-violet-300"],
  "Qiskit Aer": [SiQiskit, "text-violet-300"],
  NumPy: [SiNumpy, "text-sky-300"],
  Numba: [SiNumba, "text-sky-300"],
};

export default function TechIcon({ name }) {
  const entry = icons[name];
  if (!entry) return null;
  const [Icon, color] = entry;
  return <Icon className={`shrink-0 ${color}`} aria-hidden="true" />;
}
