import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div
        class="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/sQLnLJD/museum.jpg")`,
        }}
      >
        <div class="hero-overlay bg-red-400 bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-6xl font-bold text-white">
              Welcome to AIDsistance!
            </h1>
            <p class="mb-5 text-white">Based in bustling Jakarta!</p>
          </div>
        </div>
      </div>
      <div>
        <br></br>
        <div className="grid grid-cols-2 gap-0">
          <div className="bg-white h-1/2 border-x-2 border-white-400">
            <h1 className="text-3xl text-center text-black">Who are we?</h1>
            <br></br>
            <h1 className="text-md text-center text-black px-10 text-justify">
              HIV is a virus that attacks the body's immune system. If not
              treated, it could cause AIDS, where the virus becomes untreatable.
              There are 650,000 people dying from HIV in 2021, and 30.4 million
              people living with AIDS in 2021.
            </h1>
            <br></br>
            <h1 className="text-md text-center text-black px-10 text-justify">
              Aidsistance is a non-profit organization that helps children with
              aids
            </h1>
          </div>
          <div className="bg-white h-1/2 border-x-2 border-white-400">
            <h1 className="text-3xl text-center text-black">Vision</h1>
            <br></br>
            <h1 className="text-md text-center text-black px-10 text-justify">
              To empower/educate a world where individuals are able to live
              independently despite the barrier of HIV/AIDS.
            </h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="text-3xl text-center text-black px-10">Mision</h1>
            <h1 className="text-md text-center text-black px-10 text-justify">
              Providing platforms to raise awareness through creating
              events/raising funds to help children/youths affected by HIV/AIDS
              to gain more understanding of the disease and how to be successful
              despite the limitations.
            </h1>
          </div>
        </div>
      </div>
      <br />
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
      </div>
      <br />
      <div
        class="hero min-h-50"
        style={{
          backgroundImage: `url("https://i.ibb.co/5cnB2Vp/lima-hal-menarik-dari-jakarta-9-Kpuwo-Hz5t.jpg")`,
        }}
      >
        <div class="hero-overlay bg-red-400 bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-6xl font-bold text-white">Events</h1>
            <p class="mb-5 text-white">Coming Soon!</p>
          </div>
        </div>
      </div>
      <br />
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
      </div>
      <br />
      <div
        class="hero min-h-50"
        style={{
          backgroundImage: `url("https://i.ibb.co/xD29s7L/jakarta-indonesia-dezeen-hero.webp")`,
        }}
      >
        <div class="hero-overlay bg-red-400 bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-6xl font-bold text-white">Sponsorhips</h1>
            <p class="mb-5 text-white">Credits</p>
          </div>
        </div>
      </div>
      <br />
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
      </div>
      <br />
      <div
        class="hero min-h-50"
        style={{
          backgroundImage: `url("https://i.ibb.co/R4CChqf/dki-jakarta.jpg")`,
        }}
      >
        <div class="hero-overlay bg-red-400 bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-6xl font-bold text-white">Encouraging</h1>
            <p class="mb-5 text-white">Messages</p>
          </div>
        </div>
      </div>
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sQLnLJD/museum.jpg" alt="Pizza" />
        </div>
      </div>
    </>
  );
}

export default Hero;
