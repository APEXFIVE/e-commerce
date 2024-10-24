// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { GrOverview } from "react-icons/gr";
import { RiAdvertisementFill } from "react-icons/ri";
import { FiList } from "react-icons/fi";
import { IoSettings } from "react-icons/io5";
import { LuLogOut } from 'react-icons/lu';
import { useState } from 'react';
const Sidebar = ({ isCollapsed }) => {

  const [isAdvertsOpen, setIsAdvertsOpen] = useState(false);

  const toggleAdvertsDropdown = () => {
    setIsAdvertsOpen(!isAdvertsOpen);
  };
  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <h2 className={`sidebar-title ${isCollapsed ? 'hidden' : ''}`}>Vendor Dashboard</h2>
      <ul>
        <li><Link to="/dashboard/profile"> <CgProfile /> <span className={isCollapsed ? 'hidden' : ''}>Profile</span></Link></li>
        <li><Link to="/dashboard"> <GrOverview /> <span className={isCollapsed ? 'hidden' : ''}>Overview</span></Link></li>
        <li>
          <div className='flex items-center justify-between cursor-pointer' onClick={toggleAdvertsDropdown}>
            <div className='flex items-center'>
              <RiAdvertisementFill />
              <span className={isCollapsed ? 'hidden' : ''}>Adverts</span>
            </div>
            <span className={isCollapsed ? 'hidden' : ''}>
              {isAdvertsOpen ? '▲' : '▼'}
            </span>
          </div>


          {isAdvertsOpen && (
            <ul className='ml-4'>
              <li><Link to="/dashboard/adverts">Manage Adverts</Link></li>
              <li><Link to="/dashboard/adverts/add">Create Advert</Link></li>

            </ul>
          )}
        </li>
        <li><Link to="/dashboard/orders"> <FiList /> <span className={isCollapsed ? 'hidden' : ''}>Orders</span></Link></li>
        <li><Link to="/dashboard/settings"> <IoSettings /> <span className={isCollapsed ? 'hidden' : ''}>Settings</span></Link></li>
        <li><Link to="/"> <LuLogOut /> <span className={isCollapsed ? 'hidden' : ''}>Logout</span></Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
