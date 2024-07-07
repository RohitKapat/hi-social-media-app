import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className=" w-1/6 bg-sky-600 h-full flex flex-col justify-between">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/super-admin">Super Admin</Link></li>
        <li><Link to="/super-resellers">Super Resellers</Link></li>
        <li><Link to="/resellers">Resellers</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/mag-users">Mag Users</Link></li>
        <li><Link to="/tickets">Tickets</Link></li>
        <li><Link to="/automation">Automation</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
