function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-role">FRONTEND DEVELOPER</p>

        <h1>
          Hi, I'm <span>KAVYA M</span>
        </h1>

        <p className="hero-description">
          I build responsive web applications using React,
          JavaScript and APIs.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
                href="/Kavya_Mohan.pdf"
                download
                className="secondary-btn"
                >
                Download Resume
        </a>
        </div>

      </div>

      <div className="hero-image">
        <img src="/kavya.png" alt="Kavya M" />
      </div>

    </section>
  );
}

export default Hero;