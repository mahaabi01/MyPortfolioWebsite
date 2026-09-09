import PropTypes from "prop-types";

const LinkButton = ({ href, target, label, icon, variant, classes = "" }) => (
  <a href={href} target={target} rel={target === "_blank" ? "noreferrer" : undefined} className={`btn btn-${variant} ${classes}`}>
    <span>{label}</span>{icon && <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>}
  </a>
);

LinkButton.propTypes = {
  href: PropTypes.string.isRequired, target: PropTypes.string, label: PropTypes.string.isRequired,
  icon: PropTypes.string, variant: PropTypes.string.isRequired, classes: PropTypes.string,
};

const ButtonPrimary = (props) => <LinkButton {...props} variant="primary" />;
const ButtonOutline = (props) => <LinkButton {...props} variant="outline" />;
export { ButtonPrimary, ButtonOutline };
