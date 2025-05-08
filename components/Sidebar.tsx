import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
const location = useLocation();

  const isSelected = (path: string) => location.pathname === path;

  return (
    <div className="sidebar">
      <div className="logo" onClick={() => navigate('/')}>Attendify
        <img
          src="/logo192.png"
          alt="Attendify"
          className="logo-image"
        />
      </div>
      <div className="user-info">
        <img
          src="/profile.jpg"
          alt="User Avatar"
          className="avatar"
        />
        <div className="details">
          <p>John Doe</p>
          <p>Position</p>
          <p>johndoe@example.com</p>
        </div>
      </div>
      <div className="button-division">
        <br />
        <br />
 
            
        <ul className="menu">
        <li
            className={isSelected('/') ? 'selected' : ''}
onClick={() => navigate('/')}
>
          <img
            src="/Dashboard.png"
            alt="Dashboard"
            className="icon"
          />Dashboard</li>
        <li
            className={isSelected('/departments') ? 'selected' : ''}
onClick={() => navigate('/departments')}
>
          <img
            src="/Department.png"
            alt="Department"
            className="icon"
          />Department</li>
        <li
            className={isSelected('/analysis') ? 'selected' : ''}
onClick={() => navigate('/analysis')}
>
          <img
            src="/analytics.png"
            alt="analytics"
            className="icon"
          />Analytics</li>
        <li
            className={isSelected('/staff') ? 'selected' : ''}
onClick={() => navigate('/staff')}
>
          <img
            src="/staff.png"
            alt="staff"
            className="icon"
          />Staff</li>
        <li
            className={isSelected('/timetable') ? 'selected' : ''}
onClick={() => navigate('/timetable')}
>
          <img
            src="/timetable.png"
            alt="timetable"
            className="icon"
          />Time Table</li>
        <li
            className={isSelected('/newsletter') ? 'selected' : ''}
onClick={() => navigate('/newsletter')}
>
          <img
            src="/newsletter.png"
            alt="newsletter"
            className="icon"
          />News Letter</li>
        <li
            className={isSelected('/settings') ? 'selected' : ''}
>
          <img
            src="/Settings.png"
            alt="Settings"
            className="icon"
          />Settings</li>
        <li
            className={isSelected('/logout') ? 'selected' : ''}
>
          <img
            src="/Logout.png"
            alt="Logout"
            className="icon"
          />Logout</li>
      </ul>
</div>
    </div>
  );
};

export default Sidebar;