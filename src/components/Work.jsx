import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Vendor Management System",
    kicker: "Multi-tenant operations",
    year: "2025—26",
    description: "A multi-tenant platform for admin, client, and vendor roles to manage customers, items, and marketing workflows.",
    tags: ["React", "TypeScript", "Node.js", "MySQL"],
    link: "https://github.com/mahaabi01/VMS---Frontend",
  },
  {
    title: "Learning Management System",
    kicker: "Course marketplace",
    year: "2025",
    description: "A learning platform with enrollment, course content, authentication, Stripe payments, and Firebase real-time synchronization.",
    tags: ["Next.js", "MongoDB", "Stripe", "Firebase"],
    link: "https://github.com/mahaabi01/Learning-Management-System---NextJS",
  },
  {
    title: "Artist Management",
    kicker: "Operational dashboard",
    year: "2025",
    description: "A full-stack CRUD platform for artists, songs, and related records, backed by type-safe relational data access.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    link: "https://github.com/mahaabi01/artist-management-system",
  },
  {
    title: "RadX Companion",
    kicker: "AI / healthcare research",
    year: "2025",
    description: "A major-project exploration of automated radiology report generation from chest X-ray imagery.",
    tags: ["Python", "PyTorch", "NLP", "Deep learning"],
    link: "https://github.com/mahaabi01/RadXCompanion",
  },
  {
    title: "EduHub",
    kicker: "SaaS learning platform",
    year: "2025",
    description: "A multi-surface education product with a TypeScript backend and a dedicated teacher experience.",
    tags: ["TypeScript", "SaaS", "Full stack"],
    link: "https://github.com/mahaabi01/SaaS---EduHub-",
  },
  {
    title: "Library Management System",
    kicker: ".NET Web API",
    year: "2026",
    description: "A cataloguing and circulation system with member registration, issue and return tracking, due dates, and automatic fine calculation.",
    tags: ["C#", "ASP.NET Web API", "N-tier", "Swagger"],
    link: "https://github.com/mahaabi01/dotnet-training-dlms",
  },
  {
    title: "Medusa Commerce",
    kicker: "Commerce exploration · In progress",
    year: "2026",
    description: "An ongoing TypeScript project exploring a modular commerce stack with Medusa.",
    tags: ["TypeScript", "Medusa", "Commerce"],
    link: "https://github.com/mahaabi01/medusa-ecommerce-app",
  },
];

const Work = () => (
  <section id="work" className="section work-section">
    <div className="container">
      <div className="section-heading horizontal reveal-up">
        <div><span className="section-index">04 // BUILDS</span><h2>Selected projects.</h2></div>
        <a className="text-link" href="https://github.com/mahaabi01?tab=repositories" target="_blank" rel="noreferrer">All repositories <span>↗</span></a>
      </div>
      <div className="projects-grid">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}</div>
    </div>
  </section>
);

export default Work;
