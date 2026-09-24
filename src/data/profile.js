// Informations de profil réutilisées dans plusieurs sections.
// Pour activer le bouton CV : déposer le fichier dans public/ puis indiquer son chemin, ex. "/cv-alexandre-barbier.pdf".
export const CV_URL = null;

export const SECTIONS = ["hero", "about", "skills", "projects", "contact"];

export const LINKS = {
  github: "https://github.com/AlexandreBbr",
  linkedin: "https://www.linkedin.com/in/alexandre-b-b123a91b8/",
};

// Les libellés entre "skills.items.*" sont traduits, les autres sont des noms propres.
export const SKILLS = [
  { key: "languages", items: ["C", "C++", "Rust", "C#", "Python", "JavaScript"] },
  {
    key: "graphics",
    items: ["Vulkan", "SFML", "skills.items.raytracing", "skills.items.engine", "skills.items.procedural"],
  },
  {
    key: "systems",
    items: [
      "skills.items.sockets",
      "UDP",
      "skills.items.protocols",
      "skills.items.multithreading",
      "skills.items.plugins",
      "skills.items.patterns",
    ],
  },
  { key: "tools", items: ["Linux", "CMake", "Make", "Git", "React", "Tailwind"] },
];

// Pour ajouter une capture : déposer l'image dans public/projects/ et renseigner "image", ex. "/projects/raytracer.webp".
export const PROJECTS = [
  {
    id: "pulsar",
    title: "Pulsar",
    wip: true,
    techs: ["C++", "Vulkan", "Rust", "C#"],
  },
  {
    id: "rtype",
    title: "R-Type",
    techs: ["C++", "SFML", "UDP", "CMake"],
    github: "https://github.com/AlexandreBbr/rtype",
  },
  {
    id: "raytracer",
    title: "Raytracer",
    techs: ["C++", "SFML", "libconfig++", "Multithreading"],
    github: "https://github.com/AlexandreBbr/raytracer",
  },
  {
    id: "zappy",
    title: "Zappy",
    techs: ["C", "C++", "Python", "Sockets", "Multithreading"],
    github: "https://github.com/AlexandreBbr/zappy",
  },
  {
    id: "gomoku",
    title: "Gomoku",
    techs: ["Python"],
    github: "https://github.com/AlexandreBbr/gomoku-ai",
  },
];
