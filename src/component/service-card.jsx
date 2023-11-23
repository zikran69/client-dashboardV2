export default function ServiceCard({ icon, title, subTitle }) {
  return (
    <div
      className="
    font-roboto 
    lg:max-w-[350px] 
    h-[350px] 
    border 
    lg:drop-shadow-2xl 
    drop-shadow-xl  
    backdrop-blur-md bg-white/30 
    m-4 
    px-8 
    grid 
    gap-1 
    content-center 
    text-center 
    text-black 
    hover:bg-primary-orange 
    duration-500 
    hover:text-white 
    rounded-lg
    "
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      data-aos-delay="200"
    >
      <div className="flex justify-center">
        <div className="border border-solid border-zinc-200 w-fit h-fit p-1 rounded-sm">
          <div className="border border-so w-fit h-fit p-2 rounded-sm bg-white">
            <i className={icon}></i>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center items-center capitalize font-semibold text-[18px] lg:text-[25px]">
          <span className="tracking-widest">{title}</span>
          <span className="tracking-widest px-3">&</span>
          <span className="tracking-widest">{subTitle}</span>
        </div>
      </div>
      <p className="font-raleway text-[12px] min-[768px]:text-[16px]">
        Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam
        stet diam sed stet lorem.
      </p>
    </div>
  );
}
