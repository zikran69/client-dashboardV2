import { useEffect, useState, useContext } from "react";
import { global } from "../context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import services from "../assets/services.json";
import About from "../component/about";
import Footer from "../component/footer";
import RoomCard from "../component/room-card";
import ServiceCard from "../component/service-card";
import SubTitle from "../component/sub-title";
import { Link, useNavigate } from "react-router-dom";
import auth from "../utils/auth";

export default function Home() {
  const [categories, setCategories] = useState(null);
  const updateDataID = useContext(global).updateDataID;
  const statusLogin = useContext(global).login;
  const updateStatus = useContext(global).updateLogin;
  const userName = useState(auth.isUserName);
  const navigate = useNavigate();

  const db_services = services;
  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/category`)
      .then((res) => res.json())
      .then((res) => setCategories(res.categories))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const [popUp, setPopup] = useState(
    "bg-primary-blue h-24 w-screen flex justify-between min-w-[340px] fixed top-0 z-20"
  );
  const [benar, setBenar] = useState(true);
  const popUpOnOff = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("max-md:hidden");
    menu.classList.toggle("max-md:grid");
    if (benar) {
      setPopup(
        "bg-primary-blue h-80 md:h-24 w-screen flex justify-between min-w-[340px] fixed top-0 z-20 rounded-b-sm"
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
  const updatedId = (e) => {
    updateDataID(e.target.id);
  };
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: <button className="slick-prev"></button>,
    nextArrow: <button className="slick-next"></button>,
  };

  const logout = () => {
    auth.logout();
    updateStatus(false);
    navigate("/");
  };

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
            className="text-center h-16 w-fit md:w-[500px] uppercase text-white text-xs flex items-center justify-start gap-4 max-md:hidden md:text-[12px] max-md:absolute max-md:font-raleway left-5 top-20"
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
            {statusLogin ? (
              <div className="lg:absolute right-4">
                <Link
                  // onClick={() => updateStatus(false)}
                  // to="/"
                  // className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2 bg-white py-1 px-4 rounded-full text-zinc-800"
                  className="mr-4 hover:text-primary-orange"
                >
                  {userName}
                </Link>
                <button
                  onClick={logout}
                  to="/"
                  className="mr-8 hover:text-primary-orange"
                >
                  <i
                    title="logout"
                    className="ri-logout-circle-r-line text-sm"
                  ></i>
                </button>
              </div>
            ) : (
              <div className="lg:absolute right-4">
                <Link
                  onClick={() => updateStatus(true)}
                  to="/login"
                  className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2 bg-white py-1 px-4 rounded-full text-zinc-800"
                >
                  sign-in
                </Link>
                <Link
                  onClick={popUpOnOff}
                  to="/register"
                  className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2 bg-white py-1 px-4 rounded-full text-zinc-800"
                >
                  Register
                </Link>
              </div>
            )}
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
          <div className="m-4 pb-4" onClick={updatedId}>
            <Slider {...sliderSettings}>
              {categories &&
                categories.map(
                  ({
                    idCategory,
                    nameCategory,
                    price,
                    descCategory,
                    image,
                  }) => {
                    return (
                      <div key={idCategory} className="ml-5">
                        <RoomCard
                          id={idCategory}
                          nameCategory={nameCategory}
                          price={price}
                          descCategory={descCategory}
                          image={image}
                        />
                      </div>
                    );
                  }
                )}
            </Slider>
          </div>
        </div>

        {/* bagian service */}
        <div
          id="services"
          className="pt-24 bg-[url('https://images.pexels.com/photos/261108/pexels-photo-261108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover"
        >
          <SubTitle header="our services" title="services" />
          <div className="m-2 pb-4 flex justify-center flex-wrap">
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
