// import React, { useState, useEffect } from 'react';

import Link from 'next/link';

const Header = () => (
  <>
    <div className="navbar sticky top-0 z-50 shadow" style={{ backgroundColor: '#faf9f6' }}>
      <div className="navbar-start">
        <div className="dropdown">
          <button type="button" tabIndex={0} className="btn btn-ghost btn-circle">
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
          </button>
          <button
            type="button"
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52"
            style={{ backgroundColor: '#faf9f6', color: 'black' }}
          >
            <Link href="/">
              <li>
                <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">Home</a>
              </li>
            </Link>
            <Link href="/team">
              <li>
                <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">Our Team</a>
              </li>
            </Link>
            <Link href="/futureplans">
              <li>
                <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">Future Plans</a>
              </li>
            </Link>
            <Link href="/ourprojects">
              <li>
                <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">Our Projects</a>
              </li>
            </Link>
          </button>
        </div>
      </div>
      <div className="navbar-center">
        <center>
          <img
            src="https://i.ibb.co/8r3L1mC/Logo-2.png"
            alt=""
            style={{ width: '30%', height: 'auto' }}
          />
        </center>
      </div>
      <div className="navbar-end">
        <button type="button" className="btn btn-ghost btn-circle">
          <a href="https://www.instagram.com/maxleysuites/">
            <img
              src="https://i.ibb.co/d2vBPhL/1.png"
              alt="img"
              style={{ width: '20px', height: 'auto' }}
            />
          </a>
        </button>
        <button type="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <a href="mailto:maxleysuites@gmail.com">
              <img
                src="https://i.ibb.co/ChdTZp1/5.png"
                alt=""
                style={{ width: '20px', height: 'auto' }}
              />
            </a>
          </div>
        </button>
      </div>
    </div>
  </>
);

export default Header;
