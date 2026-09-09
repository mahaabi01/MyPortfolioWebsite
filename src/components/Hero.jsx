import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="hero-grid container">
      <div className="hero-copy">
        <div className="eyebrow reveal-up"><span>~/portfolio</span><b>main</b></div>
        <h1 className="hero-title reveal-up">I build software across the <span>full stack.</span></h1>
        <p className="hero-intro reveal-up">
          Hey, I&apos;m Abilash — a Computer Engineer working across React and
          Next.js interfaces, Node.js and .NET backends, relational and document
          databases, and Python-based AI/ML projects.
        </p>
        <div className="hero-actions reveal-up">
          <ButtonPrimary href="#work" label="Explore projects" icon="south_east" />
          <ButtonOutline href="https://drive.google.com/file/d/1lWJ-gJiHot6-pySPOqMKtHOlvSWHveKq/view" target="_blank" label="View résumé" icon="description" />
          <ButtonOutline href="https://github.com/mahaabi01" target="_blank" label="github/mahaabi01" icon="arrow_outward" />
        </div>
        <div className="hero-status reveal-up">
          <span><i /> open_to: full-stack / backend roles</span>
          <span>based_in: Lalitpur, Nepal</span>
        </div>
      </div>

      <div className="dev-console reveal-up">
        <div className="console-bar">
          <div><i /><i /><i /></div>
          <span>developer.config.ts</span>
          <b>⌘ K</b>
        </div>
        <div className="console-body">
          <div className="profile-chip">
            <img src="/images/abilash (1).png" alt="Abilash Maharjan" />
            <div><strong>Abilash Maharjan</strong><span>Computer Engineer · MSc student</span></div>
            <em>ONLINE</em>
          </div>
          <pre aria-label="Developer profile code"><code>
            <span className="code-purple">const</span> developer = {"{"}<br />
            {"  "}<span className="code-blue">frontend</span>: [<span className="code-green">&quot;React&quot;</span>, <span className="code-green">&quot;Next.js&quot;</span>],<br />
            {"  "}<span className="code-blue">backend</span>: [<span className="code-green">&quot;Node.js&quot;</span>, <span className="code-green">&quot;.NET&quot;</span>],<br />
            {"  "}<span className="code-blue">data_ai</span>: [<span className="code-green">&quot;SQL&quot;</span>, <span className="code-green">&quot;Python&quot;</span>, <span className="code-green">&quot;ML&quot;</span>],<br />
            {"  "}<span className="code-blue">curious</span>: <span className="code-purple">true</span><br />
            {"}"};
          </code></pre>
          <div className="system-map" aria-hidden="true">
            <span>CLIENT</span><i>→</i><span>API</span><i>→</i><span>DATA</span><i>→</i><span>MODEL</span>
          </div>
          <div className="console-foot"><span>● server running</span><span>39 public repos</span><span>6+ years on GitHub</span></div>
        </div>
      </div>
    </div>
    <div className="hero-marquee" aria-hidden="true"><div>REACT · NEXT.JS · NODE.JS · ASP.NET CORE · TYPESCRIPT · C# · POSTGRESQL · MONGODB · PYTHON · PYTORCH · REACT · NEXT.JS · NODE.JS · ASP.NET CORE · TYPESCRIPT · C# · POSTGRESQL · MONGODB · PYTHON · PYTORCH · </div></div>
  </section>
);

export default Hero;
