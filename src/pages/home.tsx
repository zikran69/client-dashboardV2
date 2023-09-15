import { useState } from "react";

import kategori from "../assets/kategori.json";
import services from "../assets/services.json";

import RoomCard from "../component/room-card";
import ServiceCard from "../component/service-card";
import SubTitle from "../component/sub-title";

export default function Home() {
  const [popUp, setPopup] = useState(
    "bg-primary-blue h-24 w-screen flex justify-between min-w-[340px] fixed top-0 lef-0 z-20"
  );
  const [benar, setBenar] = useState(true);
  // benar artinya popUpnya tidak muncul
  const popUpOnOff = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("max-md:hidden");
    menu.classList.toggle("max-md:grid");
    if (benar) {
      setPopup(
        "bg-primary-blue h-72 md:h-24 w-screen flex justify-between min-w-[340px] fixed top-0 lef-0 z-20"
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

  const db_kategori = kategori;
  const db_services = services;

  return (
    <div className="font-roboto h-screen">
      <div className={popUp}>
        <div className="text-4xl font-semibold text-primary-orange w-[25%] min-w-[200px] max-h-24 flex items-center justify-center">
          MYHOTEL
        </div>
        <div className="w-[75%] flex-row justify-center items-center">
          <div className="h-8 bg-white flex items-center justify-between px-2 max-md:hidden">
            <div className="font-raleway flex justify-around text-sm">
              <div className="flex items-center">
                <i className="ri-mail-line text-primary-orange"></i>
                <span className="text-secondary-gray px-2">
                  info@myhotel.yogya.com
                </span>
              </div>
              <div className="flex items-center mx-1">
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
              <i className="ri-youtube-line text-primary-orange mr-4"></i>
            </div>
          </div>
          <div
            id="menu"
            className="h-16 w-fit md:w-[500px] uppercase text-white text-xs flex items-center justify-start gap-4 max-md:hidden md:text-sm max-md:absolute max-md:font-raleway left-5 top-20"
          >
            <a
              onClick={popUpOnOff}
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2"
            >
              home
            </a>
            <a
              onClick={popUpOnOff}
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2"
            >
              about
            </a>
            <a
              onClick={popUpOnOff}
              href="#services"
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2"
            >
              service
            </a>
            <a
              onClick={popUpOnOff}
              href="#rooms"
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2"
            >
              rooms
            </a>
            <a
              onClick={popUpOnOff}
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2"
            >
              pages
            </a>
            <a
              onClick={popUpOnOff}
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2"
            >
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
            viewBox="0 0 17 14"
          >
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
      <div onClick={popUpOff} className="z-10">
        <div id="rooms" className="pt-24">
          <SubTitle header="our rooms" title="rooms" />
          <div className="m-4 pb-4 flex justify-center flex-wrap lg:grid lg:grid-cols-3">
            {db_kategori.map(({ id, kategori, harga, gambar, aktif }) => {
              return (
                <div key={id}>
                  <RoomCard
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
        <div id="services" className="pt-24">
          <SubTitle header="our services" title="services" />
          <div className="m-4 pb-4 flex justify-center flex-wrap lg:grid lg:grid-cols-3">
            {db_services.map(({ id, title, subTitle, icon, wide }) => {
              return (
                <div key={id}>
                  <ServiceCard title={title} subTitle={subTitle} icon={icon} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
