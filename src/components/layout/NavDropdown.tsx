import React from 'react';
import { type NavItem } from '../../types/navigation';
import '../../styles/globals.css';

interface NavDropdownProps {
  items: NavItem[];
  isVisible: boolean;
  onItemClick?: () => void;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ items, isVisible, onItemClick }) => {
  if (!isVisible) return null;

  return (
    <div className="nav-dropdown">
      <ul className="dropdown-menu">
        {items.map((item) => (
          <li key={item.id} className="dropdown-item">
            <a 
              href={item.href} 
              className="dropdown-link"
              onClick={onItemClick}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavDropdown;