function ProjectCard({
  number,
  title,
  description,
  image,
  technologies,
  github,
  demo,
  featured,
}) {
  return (
    <article
      className={`project-card ${
        featured ? "featured-project" : ""
      }`}
    >
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-content">
        <p className="project-number">{number}</p>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="project-tech">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;