import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    number: "01",
    title: "Job Trail Simulator",
    description:
      "An AI-based career simulation platform that helps users explore different job roles through practical, role-specific tasks and interactive simulations.",
    image: "/projects/job-trail-simulator.png",
    technologies: ["React", "FastAPI", "SQLite", "Gemini API"],
    github: "https://github.com/Kavya-476/Job-Trail-Simulator",
    demo: null,
  },

  {
    number: "02",
    title: "Product Store",
    description:
      "A React-based product application that fetches product data from a REST API, displays products dynamically, and allows users to add products to a shopping cart.",
    image: "/projects/product-store.png",
    technologies: ["React", "JavaScript", "REST API"],
    github: "https://github.com/kavyamohanan476/Product-app",
    demo: "https://product-app-ten-sigma.vercel.app/",
  },

  {
    number: "03",
    title: "User Directory",
    description:
      "A React application that fetches user data from an API and provides client-side search and filtering to help users quickly find specific records.",
    image: "/projects/user-directory.png",
    technologies: ["React", "JavaScript", "REST API"],
    github: "https://github.com/kavyamohanan476/User-directory",
    demo: "https://user-directory-hazel.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="section-heading">
        <p>MY WORK</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
         <ProjectCard
  number={project.number}
  title={project.title}
  description={project.description}
  image={project.image}
  technologies={project.technologies}
  github={project.github}
  demo={project.demo}
  featured={project.number === "01"}
/>
        ))}

      </div>

    </section>
  );
}

export default Projects;