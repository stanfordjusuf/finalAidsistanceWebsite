import React from 'react';

export default function ourprojects() {
  return (
    <>
      <center style={{ backgroundColor: '#ec6f7c' }}>
        <br />
        <h1 className="text-5xl font-bold text-black">Our Projects & Events</h1>
        <br />
      </center>
      <div
        className="hero min-h-screen bg-base-200"
        style={{ backgroundColor: '#faf9f6' }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/8r3L1mC/Logo-2.png"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/8r3L1mC/Logo-2.png"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/8r3L1mC/Logo-2.png"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/8r3L1mC/Logo-2.png"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/8r3L1mC/Logo-2.png"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/8r3L1mC/Logo-2.png"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/8r3L1mC/Logo-2.png"
                className="rounded-box"
              />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">
              Day 1 - University Prep and Career Talks
            </h1>
            <p className="py-6">
              Seminar 1 (morning): University Prep → what to expect, application
              tips
              <br />
              Seminar 2 (afternoon): Career Talks → two guest speakers
              (business/stem/psychology)
              <br />
              Things to be taught: Daily conversational English phrases; Basic
              Algebra Math; Art/Creativity Class
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
