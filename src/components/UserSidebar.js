import { slide as Menu } from 'react-burger-menu';
import React from 'react';

function PrintName ()  {

  return (
    <>
    <Menu>
    <div className="top-buffer border " id="name">
    <h1>Hello</h1>
    </div>
      <a className="menu-item" href="/userHomePage">
      User Home Page
      </a>

      <a className="menu-item" href="/browsePage">
      Browse
      </a>

      <a className="menu-item" href="/myProfile">
      My Profile
      </a>

      <a className="menu-item" href="/settings">
        Settings
      </a>
    </Menu>
    </>
  );
}
export default PrintName;