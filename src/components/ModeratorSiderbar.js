import { slide as Menu } from 'react-burger-menu';
import React from 'react';

function PrintName ()  {
  return (
    <>
    <Menu>
    <div className="top-buffer border " id="name">
    <h1>Hello</h1>
    </div>
      <a className="menu-item" href="/moderatorManageActivities">
      Manage Activity
      </a>

      <a className="menu-item" href="/moderatorManageAssessments">
      Manage Assessment
      </a>

      <a className="menu-item" href="/usersActivity">
      My Recent Activities
      </a>

      <a className="menu-item" href="/moderatorManageUsers">
      Manage Users
      </a>
    </Menu>
    </>
  );
}
export default PrintName;