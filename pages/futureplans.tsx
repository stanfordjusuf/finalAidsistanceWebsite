import React from 'react';

export default function futureplans() {
  return (
    <div>
      <div className="hero h-5/6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/3fpjfBj/placeholder-img.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Future Plans</h1>
            <p className="py-6">
              We have many things planned for the future!! If you want to see
              more on what we have planned, scroll down
            </p>
          </div>
        </div>
      </div>
      <br />
      <div>
        <h1 className="text-4xl text-center font-bold">Photo Gallery</h1>
        <br />
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full h-96">
            <img
              src="https://i.ibb.co/3fpjfBj/placeholder-img.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <div id="item2" className="carousel-item w-full h-96">
            <img
              src="https://i.ibb.co/3fpjfBj/placeholder-img.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <div id="item3" className="carousel-item w-full h-96">
            <img
              src="https://i.ibb.co/3fpjfBj/placeholder-img.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <div id="item4" className="carousel-item w-full h-96">
            <img
              src="https://i.ibb.co/3fpjfBj/placeholder-img.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>

      <div className="mt-5">
        <h1 className="text-4xl font-bold text-center">Pictures</h1>
        <div className="p-5 grid grid-cols-1 lg:grid-cols-3 justify-items-center lg:space-y-0 space-y-4">
          <div>
            <img
              className="w-96 h-96 object-cover"
              src="https://i.ibb.co/3fpjfBj/placeholder-img.jpg"
            />
          </div>
          <div>
            <img
              className="w-96 h-96 object-cover"
              src="https://i.ibb.co/3fpjfBj/placeholder-img.jpg"
            />
          </div>
          <div>
            <img
              className="w-96 h-96 object-cover"
              src="https://i.ibb.co/3fpjfBj/placeholder-img.jpg"
            />
          </div>
        </div>
        <div className="p-5 grid grid-cols-1 lg:grid-cols-3 justify-items-center lg:space-y-0 space-y-4">
          <div>
            <img
              className="w-96 h-96 object-cover"
              src="https://i.ibb.co/3fpjfBj/placeholder-img.jpg"
            />
          </div>
          <div>
            <img
              className="w-96 h-96 object-cover"
              src="https://i.ibb.co/3fpjfBj/placeholder-img.jpg"
            />
          </div>
          <div>
            <img
              className="w-96 h-96 object-cover"
              src="https://i.ibb.co/3fpjfBj/placeholder-img.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
