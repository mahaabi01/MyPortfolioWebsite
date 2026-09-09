const experience = [
  {
    period: "Dec 2025 — Jul 2026",
    role: "Full-Stack Web Developer",
    company: "Edailo Pvt. Ltd.",
    summary: "Built and maintained production applications across commerce, school management, inventory, and client portfolio work. Designed REST APIs and relational schemas, then deployed to Ubuntu with PM2, Nginx, PostgreSQL, and GitHub Actions.",
  },
  {
    period: "Apr — Jun 2026",
    role: ".NET Development Training",
    company: "KMC",
    summary: "Completed intensive training in C#, ASP.NET Core MVC and Web API, Entity Framework Core, SQL Server, layered architecture, dependency injection, LINQ, validation, and authentication.",
  },
  {
    period: "May — Aug 2025",
    role: "Full-Stack SaaS Development",
    company: "Digital Pathshala Nepal",
    summary: "Contributed to student, teacher, and institution management experiences and built a React and Node.js book-management project with RESTful APIs.",
  },
  {
    period: "Dec 2024 — Mar 2025",
    role: "Full-Stack Web Developer Intern",
    company: "Lunar IT Solution",
    summary: "Developed, tested, and deployed React and Node.js applications; designed MySQL databases, wrote SQL queries, and worked on database performance.",
  },
];

const credentials = [
  ["Computer Engineering License", "Nepal Engineering Council", "https://nec.gov.np/registration/94319"],
  ["Data Scientist with Python", "DataCamp", "https://www.datacamp.com/statement-of-accomplishment/track/d53d71bc1abd150b3a063f90ccb2fe29350f9e4c?raw=1"],
  ["NodeJS Masterclass", "Udemy", "https://www.udemy.com/certificate/UC-9a48542a-4d71-4d7b-ae53-3600350042c8/"],
  ["Generative AI", "CODEIT Nepal", "https://codeit.com.np/certificate-verification/CION-22872"],
];

const Journey = () => (
  <section id="journey" className="section journey-section">
    <div className="container">
      <div className="section-heading horizontal reveal-up">
        <div><span className="section-index">03 // EXPERIENCE</span><h2>Production work and focused training.</h2></div>
        <p>Hands-on experience across product delivery, APIs, databases, deployment, and team-based development.</p>
      </div>
      <div className="journey-grid">
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item reveal-up" key={item.company + item.period}>
              <time>{item.period}</time>
              <div><span>{item.company}</span><h3>{item.role}</h3><p>{item.summary}</p></div>
            </article>
          ))}
        </div>
        <aside className="journey-aside reveal-up">
          <div className="education-card">
            <span>Education</span>
            <h3>MSc in Informatics & Intelligent Systems Engineering</h3>
            <p>Thapathali Campus, Tribhuvan University · 2026 — Present</p>
            <hr />
            <h3>Bachelor in Computer Engineering</h3>
            <p>Thapathali Campus · First Division, 72.69% · 2021 — 2025</p>
          </div>
          <div className="credential-card">
            <span>Selected credentials</span>
            {credentials.map(([name, issuer, href]) => (
              <a href={href} target="_blank" rel="noreferrer" key={name}><div><strong>{name}</strong><small>{issuer}</small></div><b>↗</b></a>
            ))}
          </div>
        </aside>
      </div>
    </div>
  </section>
);

export default Journey;
