function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="section-heading">
        <p>GET IN TOUCH</p>
        <h2>Let's Connect</h2>
      </div>

      <div className="contact-content">

        <p className="contact-intro">
          I'm open to frontend development opportunities,
          internships, and entry-level software roles.
        </p>

        <div className="contact-links">

          <a
            href="mailto:kavyamohanan476@gmail.com"
            className="contact-card"
          >
            <span className="contact-label">Email</span>
            <span>kavyamohanan476@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/kavya476"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-label">LinkedIn</span>
            <span>View Profile</span>
          </a>

          <a
            href="https://github.com/kavyamohanan476"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-label">GitHub</span>
            <span>View Projects</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;