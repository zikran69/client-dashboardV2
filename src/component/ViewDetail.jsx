import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../file-bahe/header";
import SubTitle from "../component/sub-title";
import { Link } from "react-router-dom";
import kategori from "../assets/kategori.json";
import Footer from "../component/footer";

export default function ViewDetail() {
  const db_kategori = kategori;

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
          {db_kategori.map(
            ({ kategori: kategori, gambar, gambar2, gambar3 }) => {
              return (
                <>
                  <div key={kategori} className="m-4 lg:px-6">
                    <h1 className="font-bold text-center m-4 ">{kategori}</h1>
                    <Slider {...sliderSettings}>
                      <img
                        src={gambar}
                        className="h-[250px] w-[350px] rounded-lg items-center"
                      />
                      <img
                        src={gambar2}
                        className="h-[250px] w-[350px] rounded-lg"
                      />
                      <img
                        src={gambar3}
                        className="h-[250px] w-[350px] rounded-lg"
                      />
                    </Slider>

                    <Link
                      to={`/ViewDetail/book-now/${kategori
                        .split(" ")
                        .join("-")}`}
                      className="block uppercase w-[175px] bg-primary-blue text-white text-center px-2 mt-4 py-3 max-md:px-2 rounded-lg">
                      book now!
                    </Link>
                  </div>
                </>
              );
            }
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
