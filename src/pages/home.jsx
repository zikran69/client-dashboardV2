import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import kategori from "../assets/kategori.json";
import Card from "../component/card";
import MyCarousel from "../component/carousel";

export default function Home() {
  const navigate = useNavigate();

  const [popUp, setPopup] = useState(
    "bg-primary-blue h-24 w-screen flex justify-between min-w-[340px] fixed top-0 lef-0 z-20"
  );
  const [benar, setBenar] = useState(true);
  // benar artinya popUpnya tidak muncul
  const popUpOnOff = (e) => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("max-md:hidden");
    menu.classList.toggle("max-md:grid");
    if (benar) {
      setPopup(
        "bg-primary-blue h-64 md:h-24 w-screen flex justify-between min-w-[340px] fixed top-0 lef-0 z-20"
      );
      setBenar(false);
    }
    if (!benar) {
      setPopup(
        "bg-primary-blue h-24 w-screen flex justify-between min-w-[340px] fixed top-0 lef-0 z-20"
      );
      setBenar(true);
    }
  };
  const popUpOff = () => {
    if (!benar) popUpOnOff();
  };

  const kamar = kategori;
  return (
    <div className="font-roboto h-screen">
      <div className={popUp}>
        <div className="text-4xl font-semibold text-primary-orange w-[25%] min-w-[200px] max-h-24 flex items-center justify-center">
          MYHOTEL
        </div>
        <div className="w-[75%] flex-row justify-center items-center">
          <div className="h-8 bg-white flex items-center justify-between px-6 max-md:hidden">
            <div className="font-raleway flex justify-around text-xs">
              <div className="flex items-center mr-2">
                <i className="ri-mail-line text-primary-orange"></i>
                <span className="text-secondary-gray px-2">
                  info@myhotel.yogya.com
                </span>
              </div>
              <div className="flex items-center mx-4">
                <i className="ri-phone-fill text-primary-orange"></i>
                <span className="text-secondary-gray px-2">
                  +6274 5432 9876
                </span>
              </div>
            </div>
            <div className="w-40 flex items-center justify-around">
              <i className="ri-facebook-line text-primary-orange"></i>
              <i className="ri-twitter-fill text-primary-orange"></i>
              <i className="ri-linkedin-line text-primary-orange"></i>
              <i className="ri-instagram-line text-primary-orange"></i>
              <i className="ri-youtube-line text-primary-orange"></i>
            </div>
          </div>
          <div
            id="menu"
            className="h-16 w-fit md:w-[500px] uppercase text-white text-xs flex items-center justify-start gap-3 max-md:hidden md:text-sm max-md:absolute left-5 top-20">
            <a onClick={popUpOnOff} className="mr-8 hover:text-primary-orange">
              home
            </a>
            <a onClick={popUpOnOff} className="mr-8 hover:text-primary-orange">
              about
            </a>
            <a onClick={popUpOnOff} className="mr-8 hover:text-primary-orange">
              service
            </a>
            <a
              onClick={popUpOnOff}
              href="#rooms"
              className="mr-8 hover:text-primary-orange">
              rooms
            </a>
            <a onClick={popUpOnOff} className="mr-8 hover:text-primary-orange">
              pages
            </a>
            <a onClick={popUpOnOff} className="mr-8 hover:text-primary-orange">
              contact
            </a>
          </div>
        </div>
        <button onClick={popUpOnOff} className="md:hidden mx-12 h-fit py-8">
          <svg
            className="w-6 h-6 text-white hover:text-primary-orange"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      {/* bagian content disini  */}
      <div>
        <MyCarousel />
      </div>

      <div onClick={popUpOff} className="z-10">
        <div id="rooms" className="pt-24">
          <div className="font-semibold grid justify-center items-center pt-4">
            <div className="flex justify-center items-center text-sm">
              <div className="h-[2px] w-8 bg-primary-orange"></div>
              <span className="text-primary-orange px-4">OUR ROOMS</span>
              <div className="h-[2px] w-8 bg-primary-orange"></div>
            </div>
            <div className="flex justify-between items-center text-2xl md:text-3xl  w-[220px] md:w-[300px]">
              <span>Explore</span>
              <span>Our</span>
              <span className="text-primary-orange">ROOMS</span>
            </div>
          </div>
          <div className="m-4 p-4 flex justify-center flex-wrap lg:grid lg:grid-cols-3">
            {kamar.map(({ id, kategori, harga, gambar, aktif }) => {
              return (
                <div key={id}>
                  <Card
                    kategori={kategori}
                    harga={harga}
                    gambar={gambar}
                    aktif={aktif}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
