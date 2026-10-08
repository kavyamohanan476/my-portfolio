function Footer() {
  return (
    <footer className="footer">

      <p>
        © {new Date().getFullYear()} KAVYA M. All rights reserved.
      </p>

      <div className="footer-links">
        <a
          href="https://github.com/kavyamohanan476"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/kavya476"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

    </footer>
  );
}

export default Footer;