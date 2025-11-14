import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'catalogue', 'contact', 'export'];
      const scrollPosition = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'catalogue', label: 'Catalogue' },
    { id: 'contact', label: 'Contact' },
    { id: 'export', label: 'Export' },
  ];

  const menuClass = 'nav-menu' + (isMenuOpen ? ' active' : '');
  const hamburgerClass = 'hamburger' + (isMenuOpen ? ' active' : '');

  return (
    <nav className="navbar-custom">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <svg width="80" height="50" viewBox="0 0 120 60">
              <rect fill="#d32f2f" width="120" height="60" rx="5" />
              <ellipse cx="30" cy="45" rx="15" ry="8" fill="#4caf50" />
              <text 
                x="60" 
                y="38" 
                textAnchor="middle" 
                fontFamily="Arial Black" 
                fontSize="22" 
                fill="white" 
                fontWeight="bold"
              >
                SEVAL
              </text>
            </svg>
          </div>

          <button 
            className={hamburgerClass}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={menuClass}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const linkClass = isActive ? 'active' : '';
              const linkHref = '#' + item.id;

              return (
                <li key={item.id}>
                  <a
                    href={linkHref}
                    className={linkClass}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button 
            className="quote-btn" 
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Request a Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;