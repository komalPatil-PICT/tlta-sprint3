import { slide as Menu } from 'react-burger-menu';
import React from 'react';

function PrintName ()  {

  return (
    <>
    <Menu>
    <div className="top-buffer border " id="name">
    <h1>Hello</h1>
    </div>
      <a className="menu-item" href="/adminManageUsers">
        Manage Users
      </a>

      <a className="menu-item" href="/adminAssessments">
       Manage Assessments
      </a>

      <a className="menu-item" href="/adminActivities">
        Manage Activities
      </a>

      <a className="menu-item" href="/usersActivities">
        Review Certificates
      </a>
    </Menu>
    </>
  );
}
export default PrintName;