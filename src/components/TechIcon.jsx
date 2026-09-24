import {
  SiReact, SiTailwindcss, SiJavascript, SiC, SiSfml, SiCplusplus, SiPython,
  SiRust, SiVulkan, SiDotnet, SiCmake, SiLinux, SiGit,
} from "react-icons/si";

const icons = {
  React: [SiReact, "text-cyan-400"],
  Tailwind: [SiTailwindcss, "text-sky-400"],
  JavaScript: [SiJavascript, "text-yellow-400"],
  "C++": [SiCplusplus, "text-blue-300"],
  C: [SiC, "text-blue-300"],
  "C#": [SiDotnet, "text-violet-400"],
  Python: [SiPython, "text-yellow-300"],
  Rust: [SiRust, "text-orange-300"],
  SFML: [SiSfml, "text-green-400"],
  Vulkan: [SiVulkan, "text-red-400"],
  CMake: [SiCmake, "text-sky-300"],
  Linux: [SiLinux, "text-gray-200"],
  Git: [SiGit, "text-orange-400"],
};

export default function TechIcon({ name }) {
  const entry = icons[name];
  if (!entry) return null;
  const [Icon, color] = entry;
  return <Icon className={`shrink-0 ${color}`} aria-hidden="true" />;
}
