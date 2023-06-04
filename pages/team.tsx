import React from 'react';

export default function team() {
  return (
    <div>
      <br />
      <h1 className="text-4xl font-bold text-center">Meet Our Team</h1>
      <br />
      <div className="p-5 grid grid-cols-1 lg:grid-cols-3 justify-items-center lg:space-y-0 space-y-4 bg-[#FF4F4F]">
        <div>
          <div className="w-96 h-full bg-white shadow-xl rounded-xl">
            <img
              className="w-full rounded-t-xl"
              src="https://i.ibb.co/QQG71pQ/Ryan-Mondong.png"
              alt="Ryan Mondong"
            />
            <div className="card-body">
              <h2 className="text-2xl text-center">Ryan Mondong</h2>
              <p className="text-center">
                My name is Ryan and I am a web developer for AIDsistance. I love
                soccer and it is my main sport.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-96 h-full bg-white shadow-xl rounded-xl">
            <img
              className="w-full rounded-t-xl"
              src="https://i.ibb.co/197ZBZf/Nadya-Setiawan.png"
              alt="Nadya Setiawan"
            />
            <div className="card-body">
              <h2 className="text-2xl text-center">Nadya Setiawan</h2>
              <p className="text-center">
                My name is Nadya Setiawan, I’m a content creator for
                Aidsistance. I an a freshman in Northeastern university and I
                love cafe hopping!
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-96 h-full bg-white shadow-xl rounded-xl">
            <img
              className="w-full rounded-t-xl"
              src="https://i.ibb.co/3476sxZ/Audrey-Kristiali.png"
              alt="Audrey Kristiali"
            />
            <div className="card-body">
              <h2 className="text-2xl text-center">Audrey Kristiali</h2>
              <p className="text-center">
                My name is Audrey Kristiali, I am the finance coordinator for
                AIDsistance. I love reading books and traveling
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="p-5 grid grid-cols-1 lg:grid-cols-3 justify-items-center lg:space-y-0 space-y-4">
        <div>
          <div className="w-96 h-full bg-red-400 shadow-xl rounded-xl">
            <img
              className="w-full rounded-t-xl"
              src="https://i.ibb.co/6ZK34Fj/Cherish-Andrea.png"
              alt="Cherish Andrea"
            />
            <div className="card-body">
              <h2 className="text-2xl text-center text-white">
                Cherish Andreea
              </h2>
              <p className="text-center">
                My name is Cherish Andreea and I am a content creator for
                Aidsistance. I go to Mountainview Christian School and I love
                playing the guitar!
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-96 h-full bg-red-400 shadow-xl rounded-xl">
            <img
              className="w-full rounded-t-xl"
              src="https://i.ibb.co/LCrjDmp/Angelina-Ang.png"
              alt="Angelina Ang"
            />
            <div className="card-body">
              <h2 className="text-2xl text-center text-white">Angelina Ang</h2>
              <p className="text-center">
                Hello! My name is Angelina Ang but most people call me Ang! I am
                an event coordinator for AIDSistance. I go to IICS and a fun
                fact about me is that I looove coffee ☕️
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-96 h-full bg-red-400 shadow-xl rounded-xl">
            <img
              className="w-full rounded-t-xl"
              src="https://i.ibb.co/JHbMpkq/Divo-Tanudjaja.png"
              alt="Ryan Mondong"
            />
            <div className="card-body">
              <h2 className="text-2xl text-center text-white">
                Divo Tanudjaja
              </h2>
              <p className="text-center">
                Hi! I am Divo Tanudjaja and I am the treasurer for AIDSistance. I
                go to ACS Jakarta and I like watching k-dramas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
