import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./header";
import SubTitle from "../component/sub-title";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "../component/footer";
import { useEffect, useState } from "react";

export default function ViewDetail() {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/category`)
      .then((res) => res.json())
      .then(setCategories)
      .catch((error) => {
        console.log(error.message);
      });
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
        <div className="m-4 pb-4 lg:grid lg:grid-cols-3 sx:grid-rows-3 gap-6 ">
          {categories &&
            categories.map(({ id, nameCategory, image, image2 }) => {
              return (
                <>
                  <div key={id} className="m-4 lg:px-6">
                    <h1 className="font-bold text-center m-4 ">
                      {nameCategory}
                    </h1>
                    <Slider {...sliderSettings}>
                      <img
                        src={`${import.meta.env.VITE_ADDR_API}/${image}`}
                        className="h-[250px] w-[350px] rounded-lg items-center"
                      />
                      <img
                        src={`${import.meta.env.VITE_ADDR_API}/${image2}`}
                        className="h-[250px] w-[350px] rounded-lg"
                      />
                    </Slider>

                    <Link
                      to={`/ViewDetail/book-now/${nameCategory
                        .split(" ")
                        .join("-")}`}
                      className="block uppercase w-[175px] bg-primary-blue text-white text-center px-2 mt-4 py-3 max-md:px-2 rounded-lg"
                    >
                      book now!
                    </Link>
                  </div>
                </>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
}
