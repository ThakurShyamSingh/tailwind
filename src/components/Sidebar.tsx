import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HomeIcon, UserGroupIcon, ChartBarIcon, Cog6ToothIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSelected = (path: string) => location.pathname === path;

  return (
    <div className="sidebar phone-ui">
      <ul className="menu">
        <li
          className={isSelected('/') ? 'selected' : ''}
          onClick={() => navigate('/')}
        >
          <HomeIcon className="icon" />
          Dashboard
        </li>
        <li
          className={isSelected('/departments') ? 'selected' : ''}
          onClick={() => navigate('/departments')}
        >
          <UserGroupIcon className="icon" />
          Departments
        </li>
        <li
          className={isSelected('/analysis') ? 'selected' : ''}
          onClick={() => navigate('/analysis')}
        >
          <ChartBarIcon className="icon" />
          Analytics
        </li>
        <li
          className={isSelected('/settings') ? 'selected' : ''}
          onClick={() => navigate('/settings')}
        >
          <Cog6ToothIcon className="icon" />
          Settings
        </li>
        <li
          className={isSelected('/logout') ? 'selected' : ''}
          onClick={() => navigate('/logout')}
        >
          <ArrowLeftOnRectangleIcon className="icon" />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;