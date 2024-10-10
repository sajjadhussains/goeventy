"use client";
import Image from "next/image";
import logo from "@/assets/navbar/Goeventy Logo.svg";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navItem = [
    { path: "Features", route: "/" },
    { path: "How Goeventy Works", route: "/" },
    { path: "Pricing", route: "/" },
  ];
  const toggleBtn = () => {
    // console.log(isNavOpen);
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar top-navbar navbar-expand-lg sticky-top">
      <div className="container-xl">
        <Link href="/">
          <div className="logo-container">
            <Image src={logo} width="100%" height="100%" alt="logo" />
          </div>
        </Link>

        <button
          className="without-focus border-0 navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleBtn}
        >
          {isNavOpen ? (
            <svg
              height="20"
              viewBox="0 0 329.26933 329"
              width="25"
              fill="#ae6cf8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
            </svg>
          ) : (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="20"
                viewBox="0 0 19 16"
                data-v-dbedd558=""
              >
                <g transform="translate(-325 -17)" data-v-dbedd558="">
                  <rect
                    width="19"
                    height="2"
                    rx="1"
                    transform="translate(325 31)"
                    fill="#ae6cf8"
                    data-v-dbedd558=""
                  ></rect>
                  <rect
                    width="15"
                    height="2"
                    rx="1"
                    transform="translate(329 24)"
                    fill="#ae6cf8"
                    data-v-dbedd558=""
                  ></rect>
                  <rect
                    width="19"
                    height="2"
                    rx="1"
                    transform="translate(325 17)"
                    fill="#ae6cf8"
                    data-v-dbedd558=""
                  ></rect>
                </g>
              </svg>
            </span>
          )}
        </button>
        <div
          className="collapse navbar-collapse mbl-nav"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav  mx-auto ">
            {/* 
             {navItem.map((item) => (
              <li key={item.path} className="nav-item">
                <Link className="nav-link" href={item.route}>
                  {item.path}
                </Link>
              </li>
            ))}
            */}
          </ul>

          <div className="btn-container ">
            <Link href="/contact">
              <button className="btn btn-signUp " type="submit">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
