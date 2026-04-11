import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const navItems = [
  {
    label: "Home",
    link: "#home",
    className: "nav-link",
    trackInScrollSpy: true,
  },
  {
    label: "About",
    link: "#about",
    className: "nav-link",
    trackInScrollSpy: true,
  },
  {
    label: "Work",
    link: "#work",
    className: "nav-link",
    trackInScrollSpy: true,
  },
  {
    label: "Contact",
    link: "#contact",
    className: "nav-link",
    trackInScrollSpy: true,
  },
];

const defaultSection = "home";

const Navbar = ({ navOpen }) => {
  const [activeSection, setActiveSection] = useState(defaultSection);
  const activeBox = useRef(null);
  const linkRefs = useRef({});

  useEffect(() => {
    const positionActiveBox = () => {
      const activeLink =
        linkRefs.current[activeSection] ?? linkRefs.current[defaultSection];

      if (activeLink && activeBox.current) {
        activeBox.current.style.top = activeLink.offsetTop + "px";
        activeBox.current.style.left = activeLink.offsetLeft + "px";
        activeBox.current.style.width = activeLink.offsetWidth + "px";
        activeBox.current.style.height = activeLink.offsetHeight + "px";
      }
    };

    const frameId = window.requestAnimationFrame(positionActiveBox);
    window.addEventListener("resize", positionActiveBox);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", positionActiveBox);
    };
  }, [activeSection, navOpen]);

  useEffect(() => {
    const trackedSections = navItems
      .filter(({ trackInScrollSpy }) => trackInScrollSpy)
      .map(({ link }) => document.querySelector(link))
      .filter(Boolean);

    if (!trackedSections.length) return;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 160;
      let currentSection = defaultSection;

      trackedSections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection((previousSection) =>
        previousSection === currentSection ? previousSection : currentSection
      );
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className }, index) => {
        const sectionId = link.replace("#", "");

        return (
          <a
            href={link}
            key={index}
            ref={(element) => {
              if (element) {
                linkRefs.current[sectionId] = element;
              }
            }}
            className={`${className} ${
              activeSection === sectionId ? "active" : ""
            }`}
            aria-current={activeSection === sectionId ? "page" : undefined}
            onClick={() => {
              if (document.querySelector(link)) {
                setActiveSection(sectionId);
              }
            }}
          >
            {label}
          </a>
        );
      })}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
