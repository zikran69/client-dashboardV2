import AboutTotal from "./about-total";
import aboutTotal from "../assets/about-total.json";

export default function AboutProfile() {
  return (
    <div
      className="
    font-roboto 
    pt-2
    "
    >
      <div className="flex justify-between items-center text-lg">
        <p className="text-primary-orange">ABOUT US</p>
        <div className="h-[2px] w-16 bg-primary-orange"></div>
      </div>
      <div className="">
        <p className="font-semibold">Welcom to</p>
        <p className="text-primary-orange font-semibold tracking-widest">
          MYHOTEL
        </p>
      </div>
      <div
        className="
      font-raleway 
      mt-2
      text-xs
      "
      >
        <p className="text-dark font-bold">
          Temukan kembali, ketenangan. Ini hidupmu.. Nikmati apa yang kamu mau
        </p>
        <p className="text-dark font-bold">
          Dunia baru, temukan itu, Pertama, Anda mencintai … kemudian Anda hidup
        </p>
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
