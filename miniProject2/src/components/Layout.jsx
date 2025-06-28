import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <NavLink to="/">All Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/completed">Completed Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
