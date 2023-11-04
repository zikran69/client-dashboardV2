import AboutTotal from "./about-total";
import aboutTotal from "../assets/about-total.json";

export default function AboutProfile() {
  return (
    <div
      className="
    font-roboto 
    pt-2
    ">
      <div className="">
        <h2 className="font-semibold min-[768px]:text-xl text-white">
          Welcom to
        </h2>
        <h2 className="text-primary-orange font-semibold tracking-widest min-[768px]:text-2xl">
          MY HOTEL
        </h2>
      </div>
      <div
        className="
      font-raleway 
      mt-2
      text-xs
      min-[768px]:text-lg
      ">
        <h4 className="text-dark font-bold text-white">
          Temukan kembali, ketenangan.
          <mark> Ini hidupmu.. Nikmati apa yang kamu mau</mark>
        </h4>
        <h4 className="text-dark font-bold text-white">
          Dunia baru, temukan itu,
          <mark> Pertama, Anda mencintai … kemudian Anda hidup</mark>
        </h4>
      </div>
      <div className="sm:flex justify-around grid my-4">
        {aboutTotal.map(({ id, title, total, icon }) => {
          return (
            <div key={id} className="mr-2 py-2">
              <AboutTotal title={title} total={total} icon={icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
