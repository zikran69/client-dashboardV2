import AboutTotal from "./about-total";
import aboutTotal from "../assets/about-total.json";

export default function AboutProfile() {
  return (
    <div className="lg:w-[600px] font-roboto pt-2 w-[full]">
      <div className="flex justify-between items-center text-lg w-[250px]">
        <p className="text-primary-orange">ABOUT US</p>
        <div className="h-[2px] w-32 bg-primary-orange"></div>
      </div>
      <div className="flex lg:grid gap-2 text-4xl mt-2">
        <p className="font-semibold">Welcom to</p>
        <p className="text-primary-orange font-semibold">MYHOTEL</p>
      </div>
      <div className="font-raleway mt-4">
        <p>
          Temukan kembali, ketenangan. Ini hidupmu.. Nikmati apa yang kamu mau
        </p>
        <p>
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
