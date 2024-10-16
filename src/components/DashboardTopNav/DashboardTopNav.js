import React from "react";
import defaultUser from "../../assets/images/user-review.png";
import Image from "next/image";

const DashboardTopNav = () => {
  return (
    <nav className="navbar top-navbar-dashboard sticky-top navbar-expand">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav right-nav ms-auto">
          <li className="nav-link">
            <div className="dropdown dropdown-bell">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="29"
                  viewBox="0 0 24 29"
                  fill="none"
                >
                  <path
                    d="M23.2548 20.2956C21.4404 18.762 20.4 16.5204 20.4 14.1456V10.8C20.4 6.5772 17.2632 3.0816 13.2 2.496V1.2C13.2 0.5364 12.6624 0 12 0C11.3376 0 10.8 0.5364 10.8 1.2V2.496C6.7356 3.0816 3.6 6.5772 3.6 10.8V14.1456C3.6 16.5204 2.5596 18.762 0.7344 20.3052C0.2676 20.7048 0 21.2856 0 21.9C0 23.058 0.942 24 2.1 24H21.9C23.058 24 24 23.058 24 21.9C24 21.2856 23.7324 20.7048 23.2548 20.2956Z"
                    fill="#525252"
                  />
                  <path
                    d="M12 28.8C14.1732 28.8 15.9912 27.2508 16.4088 25.2H7.59119C8.00879 27.2508 9.82679 28.8 12 28.8Z"
                    fill="#525252"
                  />
                </svg>
                <div className="notification-text">0</div>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Action 3
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-link">
            <div className="dropdown dropdown-profile">
              <div
                className="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="img-container">
                  <Image src={defaultUser} alt="user" placeholder="blur" />
                </div>
              </div>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    Task 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Task 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Task 3
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardTopNav;
