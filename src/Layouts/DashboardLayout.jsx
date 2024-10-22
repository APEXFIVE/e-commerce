import { useState } from 'react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(prevState => !prevState);
  };

  
  return (
    <div className="dashboard">
    <Sidebar isCollapsed={isCollapsed} />
    <div className="main-content">
      <Header onToggle={toggleSidebar} />
      {/* Other components or content go here */}
      <Outlet/>
    </div>
  </div>
  );
};

export default DashboardLayout;
