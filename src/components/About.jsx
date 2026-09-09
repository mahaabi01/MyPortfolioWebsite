const About = () => (
  <section id="about" className="section">
    <div className="container about-grid">
      <div className="section-heading reveal-up"><span className="section-index">01 // README</span><h2>The human behind the endpoints.</h2></div>
      <div className="about-copy reveal-up">
        <p className="lead">I started with JavaScript, got curious about what happens behind the interface, and kept following the stack downward—from components to APIs, databases, servers, and models.</p>
        <div className="about-columns">
          <p>I graduated in Computer Engineering from Thapathali Campus with First Division and now study Informatics and Intelligent Systems Engineering at master&apos;s level. My work spans React, Next.js, Node.js, ASP.NET Core, APIs, and modern database tooling.</p>
          <p>Alongside production web development, I explore machine learning with Python, PyTorch, and TensorFlow — including chest X-ray radiology report generation, data analysis, and model-driven product ideas.</p>
        </div>
        <div className="evidence-strip" aria-label="Professional strengths">
          <div><strong>End to end</strong><span>UI, API, data, deployment</span></div>
          <div><strong>Backend minded</strong><span>Auth, schemas, integrations</span></div>
          <div><strong>Production aware</strong><span>Linux, Nginx, CI/CD</span></div>
        </div>
        <div className="personal-note"><span>communication.txt</span> Newari and Nepali (native) · English and Hindi (professional)</div>
      </div>
    </div>
  </section>
);

export default About;
