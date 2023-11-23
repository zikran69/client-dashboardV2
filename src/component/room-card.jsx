import { Link } from "react-router-dom";

export default function RoomCard({ nameCategory, price, descCategory, image }) {
  return (
    <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="200">
      <div
        className="
    h-[550px] 
    min-[640px]:h-[650px]
    min-[768px]:h-[750px]
    min-[1024px]:h-[630px]
    w-[250px] 
    min-[375px]:w-[350px]
    min-[640px]:w-[550px]
    min-[768px]:w-[650px]
    min-[1024px]:w-[350px]
    font-raleway 
    border
    rounded-lg 
    drop-shadow-xl 
    bg-white m-4"
      >
        <img
          src={`${import.meta.env.VITE_ADDR_API}/${image}`}
          className="
      h-[180px] 
      min-[375px]:h-[250px]
      min-[640px]:h-[350px]
      min-[768px]:h-[400px]
      min-[1024px]:h-[300px]
      w-[250px]  
      min-[375px]:w-[350px]
      min-[640px]:w-[550px]
      min-[768px]:w-[650px]
      min-[1024px]:w-[450px]
      rounded-lg"
        />
        <div className="bg-primary-orange w-fit mt-[-12px] ml-4 px-4 text-center text-lg text-white absolute rounded-lg min-[640px]:text-2xl">
          ${price}/night
        </div>
        <div className="px-4 mt-8">
          <div className="flex items-center justify-between">
            <p className="capitalize font-roboto text-[20px] lg:text-[25px] font-semibold min-[640px]:text-3xl min-[768px]:text-4xl">
              {nameCategory}
            </p>
          </div>
          <div className="flex justify-between items-center py-4 text-zinc-600">
            <div className="flex justify-center items-center">
              <i className="fa fa-bed text-primary-orange text-lg"></i>
              <p className="ml-2 min-[768px]:text-2xl">Bed</p>
            </div>
            |
            <div className="flex justify-between items-center">
              <i className="fa fa-bath text-primary-orange text-lg min-[768px]:text-2xl"></i>
              <p className="ml-2 min-[768px]:text-2xl">Bath</p>
            </div>
            |
            <div className="flex justify-between items-center">
              <i className="fa fa-wifi text-primary-orange text-lg"></i>
              <p className="ml-2 min-[768px]:text-2xl">Wifi</p>
            </div>
          </div>
          <div className="h-[120px]">
            <p className="text-zinc-600 min-[768px]:text-lg h-32 p-2 absolute">
              {descCategory}
            </p>
          </div>
          <div className="flex md:justify-center justify-around items-center gap-2 font-bold h-fit pt-2 absolute z-50 bg-white">
            <Link to={"/ViewDetail"}>
              <button className="uppercase text-[12px] lg:text-[17px] w-[120px] lg:w-[155px] bg-primary-orange text-white text-center py-3 max-md:px-5 rounded-lg">
                <p>view detail</p>
              </button>
            </Link>
            <Link
              to={`/ViewDetail/book-now/${nameCategory.split(" ").join("-")}`}
            >
              <button className="uppercase text-[12px] lg:text-[17px] w-[120px] lg:w-[155px] bg-primary-blue text-white text-center py-3 max-md:px-5 rounded-lg">
                <p>book now</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
