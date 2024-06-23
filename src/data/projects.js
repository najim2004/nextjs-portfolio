const projects = [
  {
    id: "multi-creatify",
    title: "MultiCreatify",
    description:
      "A comprehensive solution to monitor employee workload, manage payroll, and maintain records of employee activities and contracts",
    icon: "/skills/express.svg",
    repoType: "Public",
    projectType: "Public",
    githubUrl: "https://github.com/najim2004/MultiCreatify-client",
    url: "https://multi-creatify.web.app/",
    tags: [
      "React.js",
      "Tailwind",
      "Node.js",
      "mongodb",
      " Express",
      "firebase",
      "jwt",
    ],
  },
  {
    id: "voyage-volunteer",
    title: "Voyage Volunteer",
    description:
      "An web application developed using React.js, Tailwind, Node.js, mongodb, Express firebase jwt.",
    icon: "/skills/react.svg",
    repoType: "Public",
    projectType: "Public",
    githubUrl: "https://github.com/najim2004/voyage-volunteer",
    url: "https://voyage-volunteer.web.app/",
    tags: [
      "React.js",
      "Tailwind",
      "Node.js",
      "mongodb",
      " Express",
      "firebase",
      "jwt",
    ],
  },
  {
    id: "artistry-avenue",
    title: "Artistry Avenue",
    description:
      "Artistry Avenue aims to provide a seamless platform for artists and art enthusiasts to connect.",
    icon: "/skills/mongodb.svg",
    repoType: "Public",
    projectType: "Public",
    githubUrl: "https://github.com/najim2004/artistryavenue-client",
    url: "https://artistry-avenue.web.app/",
    tags: ["React", "Tailwind", "Node.js", "Express", "Mongodb"],
  },
  {
    id: "nexus-properties",
    title: "Nexus Properties",
    description:
      "Nexus Properties is a platform which is designed to provide a seamless experience for those seeking to buy or rent residential homes of exceptional quality.",
    icon: "/skills/react.svg",
    repoType: "Public",
    projectType: "Public",
    githubUrl: "https://github.com/najim2004/Nexus-Properties",
    url: "https://home-haven-e41db.web.app/",
    tags: ["React", "Tailwind", "HTML", "CSS"],
  },
];

export default projects;

export function getProjectName(id) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
