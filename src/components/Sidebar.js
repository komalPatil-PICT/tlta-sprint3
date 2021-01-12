import React from 'react';
import '../styles/sidebar.css';

const Sidebar = () => (
    <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action bg-light">Dashboard</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Manage Users</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Manage Assessments</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Manage Activities</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Review Certificates</a>
        </div>
    </div>
);

export default Sidebar;