import React, { useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="navbar" style={{ backgroundColor: "#faf9f6" }}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52"
            style={{ backgroundColor: "#faf9f6", color: "black" }}
          >
            <Link href="/">
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link href="/team">
              <li>
                <a>Our Team</a>
              </li>
            </Link>
            <Link href="/futureplans">
              <li>
                <a>Future Plans</a>
              </li>
            </Link>
            <Link href="/ourprojects">
              <li>
                <a>Our Projects</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <center>
          <img
            src="https://i.ibb.co/8r3L1mC/Logo-2.png"
            alt=""
            style={{ width: "30%", height: "auto" }}
          />
        </center>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <a href="https://www.instagram.com/maxleysuites/">
            <img
              src="https://i.ibb.co/d2vBPhL/1.png"
              alt=""
              style={{ width: "20px", height: "auto" }}
            />
          </a>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <a href="mailto:maxleysuites@gmail.com">
              <img
                src="https://i.ibb.co/ChdTZp1/5.png"
                alt=""
                style={{ width: "20px", height: "auto" }}
              />
            </a>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
