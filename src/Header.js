import React, { useState } from "react";
import Talktosaleform from "./components/Talktosaleform";

const Header = () => {

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-custom navbar-dark"
        style={{ borderBottom: "3px solid #ffffff54" }}
      >
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img src="/bolsta_logo.png" alt="Bolsta Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <a href="#" className="btn btn-success me-2 change_btn_style">
                Sign In
              </a>
              <a href="#" className="btn btn-success me-2 rad_button">
                Get Bolsta
              </a>
              <Talktosaleform />
            </div>
          </div>
        </div>
      </nav>

      {/* Bootstrap Modal */}
    </>
  );
};

export default Header;
