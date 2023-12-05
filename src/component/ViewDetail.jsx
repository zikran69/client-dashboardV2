import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { global } from "../context";
import Header from "./header";
import SubTitle from "../component/sub-title";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../component/footer";
import { useEffect, useState, useContext } from "react";

export default function ViewDetail() {
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();
  const dataId = useContext(global).dataId;
  useEffect(() => {
    if (dataId) {
      fetch(`${import.meta.env.VITE_ADDR_API}/category/${dataId}`)
        .then((res) => res.json())
        .then((res) => setCategory(res.category))
        .catch((error) => {
          console.log(error.message);
        });
    } else navigate("/");
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev"></button>,
    nextArrow: <button className="slick-next"></button>,
  };
  return (
    <>
      <Header />
      <SubTitle header="our rooms" title="Room Detail" />
      <div>
        <div className="m-4 pb-4 lg:grid lg:grid-cols-3 sx:grid-rows-3 gap-6">
          {category && (
            <div className="w-screen grid grid-cols-2">
              <Slider {...sliderSettings} className="w-3/4">
                <img
                  className="rounded-sm"
                  src={`${import.meta.env.VITE_ADDR_API}/${category.image}`}
                />
                {category.image2 && (
                  <img
                    className="rounded-sm"
                    src={`${import.meta.env.VITE_ADDR_API}/${category.image2}`}
                  />
                )}
              </Slider>
              <div className="ml-[-120px] text-xl">
                <div className="uppercase py-4 font-semibold text-2xl">
                  {category.nameCategory}
                </div>
                <div>
                  Price:{" "}
                  <span className="text-zinc-600">{category.price} /night</span>
                </div>
                <div>
                  Facility:{" "}
                  <span className="text-zinc-600">
                    {category.facilityCategory}
                  </span>
                </div>
                <div>
                  Description:{" "}
                  <span className="text-zinc-600">{category.descCategory}</span>
                </div>
                <Link
                  to={`/ViewDetail/book-now/${category.nameCategory
                    .split(" ")
                    .join("-")}`}
                  className="block uppercase w-[175px] bg-primary-blue text-white text-center px-2 mt-4 py-3 max-md:px-2 rounded-lg"
                >
                  book now!
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
