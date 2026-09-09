const links = [
  ["GitHub", "https://github.com/mahaabi01"], ["LinkedIn", "https://www.linkedin.com/in/mahaabi01"],
  ["Résumé", "https://drive.google.com/file/d/1lWJ-gJiHot6-pySPOqMKtHOlvSWHveKq/view"],
];

const Contact = () => (
  <section id="contact" className="section contact-section">
    <div className="container contact-card reveal-up">
      <span className="section-index">05 // NEW_CONNECTION</span>
      <h2>Have a product, backend system, or AI-powered idea?</h2>
      <p>I&apos;m open to full-stack and backend roles, product collaborations, and opportunities that connect modern web engineering with practical AI/ML.</p>
      <a className="contact-email" href="mailto:mahaabi01@gmail.com">mahaabi01@gmail.com <span>↗</span></a>
      <div className="social-row">{links.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label} ↗</a>)}</div>
    </div>
  </section>
);

export default Contact;
