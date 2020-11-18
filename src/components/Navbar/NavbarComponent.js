import React, { Component } from "react";
import "./NavbarComponent.css";
import AOS from "aos";

export class NavbarComponent extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-menu flex-row">
          <div className="nav-brand">
            <a className="text-gray" href="#">
              Tourist Website
            </a>
          </div>
          <div className="toggle-collapse">
            <div className="toggle-icons">
              <i className="fas fa-bars"></i>
            </div>
          </div>
          <div>
            <ul className="nav-items">
              <li className="nav-link">
                <a href="#">Home</a>
              </li>
              <li className="nav-link">
                <a href="#">Category</a>
              </li>
              <li className="nav-link">
                <a href="#">Archive</a>
              </li>
              <li className="nav-link">
                <a href="#">Pages</a>
              </li>
              <li className="nav-link">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="social text-gray">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
