import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <h1>KAVYA M</h1>

      <button
  className="menu-button"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation menu"
  aria-expanded={menuOpen}
  aria-controls="navigation-menu"
>
        {menuOpen ? "✕" : "☰"}
      </button>

      <div
  id="navigation-menu"
  className={`nav-links ${menuOpen ? "open" : ""}`}
>
        <a href="#home" onClick={closeMenu}>Home</a>
<a href="#about" onClick={closeMenu}>About</a>
<a href="#skills" onClick={closeMenu}>Skills</a>
<a href="#projects" onClick={closeMenu}>Projects</a>
<a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;