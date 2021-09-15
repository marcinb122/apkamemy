import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navigation.css";

function Navigation() {
  return (
    <React.Fragment>
      <nav className="navigation">
        <NavLink to="/" className="logo">
          <span>
            <i class="fas fa-bacterium"></i> ApkaMemy
          </span>
        </NavLink>

        <ul className="panel">
          <li>
            <NavLink to="/regular" className="link">
              <i class="fas fa-battery-quarter"></i> Główna
            </NavLink>
          </li>
          <li>
            <NavLink to="/hot" className="link">
              <i class="fas fa-battery-full"></i> HOT!
            </NavLink>
          </li>
          <li>
            <NavLink to="/favourite" className="link">
              <i class="fas fa-star"></i>
              Ulubione
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navigation;
