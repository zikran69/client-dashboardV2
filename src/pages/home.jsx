import { useEffect, useState } from "react";

import services from "../assets/services.json";
import About from "../component/about";
import Footer from "../component/footer";
import RoomCard from "../component/room-card";
import ServiceCard from "../component/service-card";
import SubTitle from "../component/sub-title";
import { Link } from "react-router-dom";

export default function Home() {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/category`)
      .then((res) => res.json())
      .then(setCategories)
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  // const database = useContext(global).database;
  const [popUp, setPopup] = useState(
    "bg-primary-blue h-24 w-screen flex justify-between min-w-[340px] fixed top-0 z-20"
  );
  const [benar, setBenar] = useState(true);
  // benar artinya popUpnya tidak muncul
  const popUpOnOff = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("max-md:hidden");
    menu.classList.toggle("max-md:grid");
    if (benar) {
      setPopup(
        "bg-blue-500 h-80 md:h-24 w-screen flex justify-between min-w-[340px] fixed top-0 z-20 rounded-b-sm"
      );
      setBenar(false);
    }
    if (!benar) {
      setPopup(
        "bg-primary-blue h-24 w-screen flex justify-between min-w-[340px] fixed top-0 z-20"
      );
      setBenar(true);
    }
  };
  const popUpOff = () => {
    if (!benar) popUpOnOff();
  };

  const db_services = services;

  return (
    <div className="font-roboto h-screen">
      <div className={popUp}>
        <div className="text-2xl lg:text-4xl font-semibold text-primary-orange w-[25%] min-w-[150px] max-h-24 flex items-center justify-center">
          MYHOTEL
        </div>
        <div className="w-[75%] flex-row justify-center items-center">
          <div className="h-8 bg-white flex items-center justify-between px-6 max-md:hidden">
            <div className="font-raleway flex justify-around text-sm">
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
            className="h-16 w-fit md:w-[500px] uppercase text-white text-xs flex items-center justify-start gap-4 max-md:hidden md:text-[12px] max-md:absolute max-md:font-raleway left-5 top-20"
          >
            <a
              onClick={popUpOnOff}
              href="#about"
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2 bg-white py-1 px-4 rounded-full text-zinc-800"
            >
              about
            </a>
            <a
              onClick={popUpOnOff}
              href="#services"
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2 bg-white py-1 px-4 rounded-full text-zinc-800"
            >
              service
            </a>
            <a
              onClick={popUpOnOff}
              href="#rooms"
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2 bg-white py-1 px-4 rounded-full text-zinc-800"
            >
              rooms
            </a>

            <a
              onClick={popUpOnOff}
              href="#footer"
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2 bg-white py-1 px-4 rounded-full text-zinc-800"
            >
              contact
            </a>
            <Link
              onClick={popUpOnOff}
              to="/login"
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2 bg-white py-1 px-4 rounded-full text-zinc-800"
            >
              login
            </Link>
            <Link
              onClick={popUpOnOff}
              to="https://dashboard-admin-ver-2-react.vercel.app/"
              target="_blank"
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2 bg-white py-1 px-4 rounded-full text-zinc-800"
            >
              Admin
            </Link>
          </div>
        </div>
        <button
          onClick={popUpOnOff}
          className="
        md:hidden 
        mx-12 
        h-fit 
        py-8 
        absolute
        right-16
        min-[300px]:right-5
        min-[320px]:right-0
        "
        >
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
        <div
          id="about"
          className="pt-24 bg-[url('https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover w-fit min-[600px]:w-full lg:h-[600px]"
        >
          <About />
        </div>
        <div id="rooms" className="pt-24">
          <SubTitle header="our rooms" title="rooms" />
          <div className="m-4 pb-4 flex lg:flex-rows justify-center flex-wrap">
            {categories &&
              categories.map(
                ({ id, nameCategory, price, descCategory, image }) => {
                  return (
                    <div key={id}>
                      <RoomCard
                        nameCategory={nameCategory}
                        price={price}
                        descCategory={descCategory}
                        image={image}
                      />
                    </div>
                  );
                }
              )}
          </div>
        </div>

        {/* bagian service */}
        <div
          id="services"
          className="pt-24 bg-[url('https://images.pexels.com/photos/261108/pexels-photo-261108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover"
        >
          <SubTitle header="our services" title="services" />
          <div className="m-2 pb-4 flex justify-center flex-wrap ">
            {db_services.map(({ id, title, subTitle, icon }) => {
              return (
                <ServiceCard
                  title={title}
                  subTitle={subTitle}
                  icon={icon}
                  key={id}
                />
              );
            })}
          </div>
        </div>
        <div id="footer" className="pt-24">
          <Footer />
        </div>
      </div>
    </div>
  );
}
