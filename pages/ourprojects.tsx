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
                src="https://i.ibb.co/mqkgPD7/Stanford-jusuf-346-x-370-px.png"
                className="rounded-box"
              />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">
              The Land of Python Book Launch in 2024!
            </h1>
            <p className="py-6">
              Our web development team have finally finished writing their
              Python training book that combines fantasy storytelling and
              fun graphics in teaching beginner to intermediate Python
              programming skill!
              <br />
              This book will be completely free to the children supported by
              Aidsistance!
              <br />
              This book will be available in Amazon to public in 2024! So stay tune!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
