import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RoomCard({ kategori, harga, gambar, aktif }) {
  const [popUp, setPopUp] = useState();
  useEffect(() => {
    if (aktif) {
      setPopUp(
        "lg:h-[570px] h-[550px] w-[340px] font-raleway border lg:drop-shadow-2xl drop-shadow-xl bg-white m-4"
      );
    }
    if (!aktif)
      setPopUp(
        "h-[550px] w-[340px] font-raleway border drop-shadow-xl bg-white m-4"
      );
  }, [aktif]);

  return (
    <div className={popUp}>
      <img src={gambar} className="h-[250px] w-[350px] rounded-lg" />
      <div className="bg-primary-orange w-fit mt-[-12px] ml-4 px-4 text-center text-lg text-white absolute rounded-lg">
        ${harga}/night
      </div>
      <div className="px-4 mt-8">
        <div className="flex items-center justify-between">
          <p className="capitalize font-roboto text-xl font-semibold min-[640px]:text-3xl min-[768px]:text-4xl">
            {kategori}
          </p>
          <p>
            <small className="fa fa-star text-primary-orange text-lg mr-1"></small>
            <small className="fa fa-star text-primary-orange text-lg mr-1"></small>
            <small className="fa fa-star text-primary-orange text-lg mr-1"></small>
            <small className="fa fa-star text-primary-orange text-lg mr-1"></small>
            <small className="fa fa-star text-primary-orange text-lg mr-1"></small>
          </p>
        </div>
        <div className="flex justify-between items-center py-4 text-zinc-600">
          <div className="flex justify-center items-center">
            <i className="fa fa-bed text-primary-orange text-lg"></i>
            <p className="ml-2 min-[768px]:text-2xl">3 Bed</p>
          </div>
          |
          <div className="flex justify-between items-center">
            <i className="fa fa-bath text-primary-orange text-lg min-[768px]:text-2xl"></i>
            <p className="ml-2 min-[768px]:text-2xl">2 Bath</p>
          </div>
          |
          <div className="flex justify-between items-center">
            <i className="fa fa-wifi text-primary-orange text-lg"></i>
            <p className="ml-2 min-[768px]:text-2xl">Wifi</p>
          </div>
        </div>
        <p className="text-zinc-600 min-[768px]:text-xl">
          Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
          diam stet diam sed stet lorem.
        </p>
        <div className="text-sm md:text-xl flex md:justify-center justify-around items-center py-6">
          <Link to={"/ViewDetail"}>
            <button className="uppercase md:w-[175px] bg-primary-orange text-white text-center py-3 max-md:px-5 rounded-lg">
              <p>view detail</p>
            </button>
          </Link>
          <button className="uppercase md:w-[175px] bg-primary-blue text-white text-center py-3 max-md:px-5 rounded-lg">
            <p>book now</p>
          </button>
        </div>
      </div>
    </div>
  );
}
