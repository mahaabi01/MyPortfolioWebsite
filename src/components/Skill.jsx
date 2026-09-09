const groups = [
  { number: "01", title: "Frontend", tools: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive UI"] },
  { number: "02", title: "Backend", tools: ["Node.js / Express", "ASP.NET Core", "C#", "REST APIs", "JWT / OpenAPI", "Clean architecture"] },
  { number: "03", title: "Data & Delivery", tools: ["PostgreSQL", "MongoDB", "MySQL / SQL Server", "Prisma / EF Core", "Linux / Nginx", "GitHub Actions"] },
  { number: "04", title: "AI / ML", tools: ["Python", "PyTorch", "TensorFlow", "Pandas / NumPy", "Scikit-learn", "NLP"] },
];

const Skill = () => (
  <section id="capabilities" className="section skill-section">
    <div className="container">
      <div className="section-heading horizontal reveal-up">
        <div><span className="section-index">02 // STACK</span><h2>Tools in my runtime.</h2></div>
        <p>Technologies I&apos;ve used across production work, training, coursework, and side projects.</p>
      </div>
      <div className="capability-grid">
        {groups.map((group) => <article className="capability-card reveal-up" key={group.title}><span>{group.number}</span><h3>{group.title}</h3><ul>{group.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></article>)}
      </div>
    </div>
  </section>
);

export default Skill;
