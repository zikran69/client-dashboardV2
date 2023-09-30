import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../file-bahe/header";
import SubTitle from "../component/sub-title";
import { useParams } from "react-router-dom";
import kategori from "../assets/kategori.json";
import Footer from "../component/footer";

export default function ViewDetail() {
  // const { kategori } = useParams();
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
            ({ kategori: itemKategori, gambar, gambar2, gambar3 }) => {
              return (
                <>
                  <div key={itemKategori} className="m-4 lg:px-6">
                    <h1 className="font-bold text-center m-4 ">
                      {itemKategori}
                    </h1>
                    <Slider {...sliderSettings}>
                      <img
                        src={gambar}
                        className="h-[250px] w-[350px] rounded-lg"
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
                    <button className="px-2 py-2  uppercase md:w-[175px] bg-primary-blue text-white text-center max-md:px-2 rounded-lg">
                      Booking Now!
                    </button>
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
