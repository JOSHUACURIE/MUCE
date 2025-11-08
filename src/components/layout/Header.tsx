import React from 'react';
import TopBar from './TopBar';
import MainNav from './MainNav';
import { navigationData } from '../../data/navigation';
import '../../styles/globals.css'
const Header: React.FC = () => {
  return (
    <header className="header">
      <TopBar items={navigationData.topNav} />
      <MainNav items={navigationData.mainNav} />
    </header>
  );
};

export default Header;