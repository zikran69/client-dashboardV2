export default function ServiceCard({ icon, title, subTitle }) {
  return (
    <div className="font-roboto max-w-[350px] h-[350px] border lg:drop-shadow-2xl drop-shadow-xl bg-white m-4 px-8 grid gap-3 content-center text-center hover:bg-primary-orange duration-500 hover:text-white">
      <div className="flex justify-center">
        <div className="border border-solid border-zinc-200 w-fit h-fit p-1 rounded-sm">
          <div className="border border-so w-fit h-fit p-2 rounded-sm bg-white">
            <i className={icon}></i>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center items-center capitalize font-semibold text-lg">
          <span className="tracking-widest">{title}</span>
          <span className="tracking-widest px-3">&</span>
          <span className="tracking-widest">{subTitle}</span>
        </div>
      </div>
      <p className="font-raleway">
        Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam
        stet diam sed stet lorem.
      </p>
    </div>
  );
}
