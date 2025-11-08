import React, { useState, useEffect } from 'react';
import { type NavItem } from '../../types/navigation';
import NavDropdown from './NavDropdown';
import Logo from '../ui/Logo';
import '../../styles/globals.css';

interface MainNavProps {
  items: NavItem[];
}

const MainNav: React.FC<MainNavProps> = ({ items }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (itemId: string, e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault();
      e.stopPropagation();
      setActiveDropdown(activeDropdown === itemId ? null : itemId);
    }
  };

  const handleNavLinkClick = (item: NavItem, e: React.MouseEvent) => {
    if (isMobile && item.children) {
      e.preventDefault();
      handleDropdownToggle(item.id, e);
    } else {
      closeMobileMenu();
    }
  };

  return (
    <nav className="main-navigation">
      <div className="navigation-container">
        {/* Logo without text - pass showText prop as false */}
        <Logo showText={false} />
        
        {/* Mobile Menu Toggle Button */}
        <button 
          className={`nav-toggle-btn ${isMobileMenuOpen ? 'nav-toggle-active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </button>
        
        <ul className={`navigation-list ${isMobileMenuOpen ? 'nav-list-open' : ''}`}>
          {items.map((item) => (
            <li
              key={item.id}
              className={`navigation-item ${activeDropdown === item.id ? 'item-active' : ''}`}
              onMouseEnter={() => !isMobile && setActiveDropdown(item.id)}
              onMouseLeave={() => !isMobile && setActiveDropdown(null)}
            >
              {item.href ? (
                <a 
                  href={item.href} 
                  className="nav-item-link"
                  onClick={(e) => handleNavLinkClick(item, e)}
                >
                  {item.label}
                  {item.children && (
                    <span 
                      className={`mobile-arrow ${activeDropdown === item.id ? 'arrow-active' : ''}`}
                      onClick={(e) => handleDropdownToggle(item.id, e)}
                    >
                      ▼
                    </span>
                  )}
                </a>
              ) : (
                <span 
                  className="nav-item-link"
                  onClick={(e) => item.children && handleDropdownToggle(item.id, e)}
                >
                  {item.label}
                  {item.children && (
                    <span className={`mobile-arrow ${activeDropdown === item.id ? 'arrow-active' : ''}`}>
                      ▼
                    </span>
                  )}
                </span>
              )}
              
              {/* FIX: Always render NavDropdown but control visibility */}
              {item.children && (
                <NavDropdown
                  items={item.children}
                  isVisible={activeDropdown === item.id}
                  onItemClick={closeMobileMenu}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-nav-overlay"
            onClick={closeMobileMenu}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default MainNav;