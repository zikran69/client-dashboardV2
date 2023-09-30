import Header from "../file-bahe/header";
import SubTitle from "../component/sub-title";
import { useParams } from "react-router-dom";
import kategori from "../assets/kategori.json";
import Footer from "../component/footer";

export default function ViewDetail() {
  // const { kategori } = useParams();
  const db_kategori = kategori;
  return (
    <>
      <Header />
      <SubTitle header="our rooms" title="Room Detail" />
      <div>
        <div className="m-4 pb-4 flex justify-center flex-wrap lg:grid lg:grid-cols-3">
          {db_kategori.map(({ kategori, gambar, gambar2, gambar3 }) => {
            return (
              <div className="m-4 flex-wrap gird-cols-3 gap-2 lg:px-6">
                <h1 className="font-bold text-center m-4">{kategori}</h1>
                <div className="flex-warp grid-cols-3">
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
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}
