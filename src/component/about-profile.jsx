import AboutTotal from "./about-total";
import aboutTotal from "../assets/about-total.json";

export default function AboutProfile() {
  const total = aboutTotal;
  return (
    <div className="xl:w-[650px] font-roboto pt-2 w-[full] ">
      <div className="flex justify-between items-center text-lg w-[250px]">
        <p className="text-primary-orange">ABOUT US</p>
        <div className="h-[2px] w-32 bg-primary-orange"></div>
      </div>
      <div className="flex lg:grid gap-2 text-4xl mt-2">
        <p className="font-semibold">Welcom to</p>
        <p className="text-primary-orange font-semibold">MYHOTEL</p>
      </div>
      <p className="font-raleway mt-4">
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
        clita duo justo magna dolore erat amet
      </p>
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
