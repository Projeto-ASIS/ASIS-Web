import React, { useState } from 'react';
import './SideBarEmployee.css';

const SideBarEmployee = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { icon: '📹', label: 'Videos' },
    { icon: '📄', label: 'Documents' },
    { icon: '📊', label: 'Statistics' },
    { icon: '📁', label: 'Files' },
    { icon: '👥', label: 'Users' }
  ];

  return (
    <>
      {/* Desktop SideBarEmployee */}
      <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
        <button 
          className="toggle-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? '◀' : '▶'}
        </button>
        <div className="sidebar-content">
          {menuItems.map((item, index) => (
            <div className="sidebar-item" key={index}>
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="mobile-navbar">
        {menuItems.map((item, index) => (
          <div className="nav-item" key={index}>
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBarEmployee;