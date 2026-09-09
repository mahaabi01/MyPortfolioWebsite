import PropTypes from "prop-types";

const ProjectCard = ({ project, index }) => (
  <article className="project-card reveal-up">
    <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
      <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
      <div className="project-content">
        <div className="project-kicker">{project.kicker} · {project.year}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      </div>
      <span className="project-arrow">View repository ↗</span>
    </a>
  </article>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired, description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired, year: PropTypes.string.isRequired,
    kicker: PropTypes.string.isRequired, tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectCard;
