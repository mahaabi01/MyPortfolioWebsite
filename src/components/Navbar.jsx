import PropTypes from "prop-types";

const items = [
  ["About", "#about"], ["Capabilities", "#capabilities"], ["Journey", "#journey"], ["Work", "#work"],
];

const Navbar = ({ navOpen, closeNav }) => (
  <nav className={navOpen ? "navbar active" : "navbar"} aria-label="Primary navigation">
    {items.map(([label, href]) => <a href={href} onClick={closeNav} key={href}>{label}</a>)}
  </nav>
);

Navbar.propTypes = { navOpen: PropTypes.bool.isRequired, closeNav: PropTypes.func.isRequired };
export default Navbar;
