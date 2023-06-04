import React from 'react';

const Footer = () => (
  <footer
    className="footer bg-primary text-base-content"
    style={{ backgroundColor: '#faf9f6' }}
  >
    <div>
      <img
        src="https://i.ibb.co/8r3L1mC/Logo-2.png"
        alt=""
        style={{ width: '30%', height: 'auto' }}
      />
      <p className="font-bold">
        Sponsored By <br />
        Prodat
      </p>
    </div>
    <div>
      <div className="grid grid-flow-col gap-4">
        <center>
          <button type="button" className="btn btn-ghost btn-circle">
            <a href="https://www.instagram.com/maxleysuites/">
              <img
                src="https://i.ibb.co/d2vBPhL/1.png"
                alt=""
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
        </center>
      </div>
    </div>
  </footer>
);

export default Footer;
