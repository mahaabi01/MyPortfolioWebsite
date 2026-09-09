import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#home" className="wordmark" aria-label="Abilash Maharjan, home"><span>&lt;AM /&gt;</span><strong>Abilash Maharjan<br /><small>Web · Backend · AI/ML</small></strong></a>
        <Navbar navOpen={navOpen} closeNav={() => setNavOpen(false)} />
        <a href="mailto:mahaabi01@gmail.com" className="header-contact"><span className="online-dot" />Available to connect</a>
        <button className="menu-btn" onClick={() => setNavOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={navOpen}>
          <span>{navOpen ? "Close" : "Menu"}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
