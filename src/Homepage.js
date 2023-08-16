import React from "react";
import { Link, Outlet } from "react-router-dom";

import HomeContent from "./HomeContent";
import ProfileContent from "./ProfileContent";
import MessagesContent from "./MessagesContent";
import SettingsContent from "./SettingsContent";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <Link to="/" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </Link>
              </li>
              <li>
                <Link to="profile" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-people"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Profile</span>{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="messages" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Messages</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="settings" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Settings</span>
                </Link>
              </li>
            </ul>
            <hr />
            <div className="dropdown pb-4">
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src=""
                  alt=""
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
                <span className="d-none d-sm-inline mx-1">User</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li>
                  <Link to="login" className="nav-link align-middle px-0">
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
