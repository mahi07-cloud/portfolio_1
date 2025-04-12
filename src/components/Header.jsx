import { useState } from 'react';

function Header({ isLightMode, setIsLightMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="logo">ESLAVATH MAHENDAR</div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => handleNavClick('about')}>About</a></li>
          <li><a href="#projects" onClick={() => handleNavClick('projects')}>Projects</a></li>
          <li><a href="#skills" onClick={() => handleNavClick('skills')}>Skills</a></li>
          <li><a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a></li>
        </ul>
        <div className="nav-right">
          <a href="/resume.pdf" download className="resume-btn">Resume</a>
          <div className="theme-toggle" onClick={() => setIsLightMode(!isLightMode)}>
            {isLightMode ? '🌙' : '☀️'}
          </div>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          {isMenuOpen ? '×' : '☰'}
        </div>
      </nav>
    </header>
  );
}

export default Header;