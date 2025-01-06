// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../css/sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src="/path/to/logo.png" alt="ANAA System Logo" className="sidebar-logo" />
                <h2 className="system-name">ANAA Sys</h2>
            </div>
            <ul>
                <li>
                    <span role="img" aria-label="dashboard">🏠</span>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <span role="img" aria-label="users">📚</span>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <span role="img" aria-label="faculty">👩‍🏫</span>
                    <Link to="/faculty">Faculty</Link>
                </li>
                <li>
                    <span role="img" aria-label="queue">⚙️</span>
                    <Link to="/consultation">Queue</Link>
                </li>
                
                <li class="logout-button">
                    <span role="img" aria-label="logout">🚪</span>
                    <Link to="/homepage">Logout</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
