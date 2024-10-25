

import React from 'react';
import { MdMenu } from 'react-icons/md'; // Import a menu icon for the toggle

const Header = ({ onToggle }) => {
  return (
    <header className="dashboard-header">
      <h1 className='font-serif text-2xl'>DashBoard</h1>
      <button className="toggle-button" onClick={onToggle}>
        <MdMenu /> {/* Add icon here */}
      </button>
    </header>
  );
};

export default Header;

