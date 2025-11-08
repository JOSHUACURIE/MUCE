import React from 'react';
import {type NavItem } from '../../types/navigation';
import DonateButton from '../ui/DonateButton';
import '../../styles/globals.css'
import { Link } from 'react-router-dom';
interface TopBarProps {
  items: NavItem[];
}

const TopBar: React.FC<TopBarProps> = ({ items }) => {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="top-nav">
          {items.map((item) => (
            <a key={item.id} href={item.href} className="top-nav-item">
              {item.label}
            </a>
          ))}
        </div>
       <Link to="/donate"><DonateButton /></Link> 
      </div>
    </div>
  );
};

export default TopBar;