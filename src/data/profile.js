// Informations de profil réutilisées dans plusieurs sections.
// Pour activer le bouton CV : déposer le fichier dans public/ puis indiquer son chemin, ex. "/cv.pdf".
export const CV_URL = null;

export const SECTIONS = ["hero", "about", "experience", "projects", "skills", "contact"];

export const LINKS = {
  github: "https://github.com/AlexandreBbr",
  linkedin: "https://www.linkedin.com/in/alexandre-b-b123a91b8/",
};

export const EXPERIENCE = ["fullstack", "security", "servers", "management"];

// Les libellés entre "skills.items.*" sont traduits, les autres sont des noms propres.
export const SKILLS = [
  { key: "languages", items: ["C", "C++", "Rust", "Python", "JavaScript", "TypeScript", "PHP"] },
  {
    key: "web",
    items: [
      "React",
      "Next.js",
      "Angular",
      "React Native (Expo)",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "skills.items.rest",
      "WordPress",
    ],
  },
  {
    key: "data",
    items: ["SQL", "MongoDB", "Redis", "WHM / cPanel", "DNS", "Docker"],
  },
  {
    key: "systems",
    items: [
      "skills.items.sockets",
      "skills.items.multithreading",
      "skills.items.compilers",
      "skills.items.patterns",
      "Linux",
      "Git",
      "skills.items.ai",
    ],
  },
  {
    key: "quantum",
    items: ["Qiskit", "Qiskit Aer", "NumPy", "Numba", "OpenQASM", "skills.items.noise"],
  },
];

// Pour ajouter une capture : déposer l'image dans public/projects/ et renseigner "image", ex. "/projects/raytracer.webp".
export const PROJECTS = [
  {
    id: "kiwanis",
    image: "/projects/kiwanis.webp",
    group: "pro",
    title: "Mon Kiwanis",
    techs: ["TypeScript", "React Native (Expo)", "PHP", "SQL"],
    proprietary: true,
  },
  {
    id: "pulsar",
    image: "/projects/pulsar.webp",
    group: "pro",
    title: "Pulsar · Neutron",
    techs: ["Rust"],
    github: "https://github.com/Pulsar-Engine/Neutron",
  },
  {
    id: "zappy",
    image: "/projects/zappy.webp",
    group: "pro",
    title: "Zappy",
    techs: ["Python", "C", "C++", "Sockets"],
    github: "https://github.com/AlexandreBbr/zappy",
  },
  {
    id: "raytracer",
    image: "/projects/raytracer.webp",
    group: "pro",
    title: "Raytracer",
    techs: ["C++", "libconfig++", "Multithreading"],
    github: "https://github.com/AlexandreBbr/raytracer",
  },
  {
    id: "qsim",
    image: "/projects/qsim.webp",
    group: "perso",
    title: "qsim",
    techs: ["Python", "NumPy", "Numba", "Qiskit"],
  },
  {
    id: "qalgo",
    image: "/projects/qalgo.webp",
    group: "perso",
    title: "qalgo-hardware",
    techs: ["Python", "Qiskit", "Qiskit Aer"],
  },
];
