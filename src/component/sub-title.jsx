export default function ServiceTitle({ header, title }) {
  return (
    <div className="font-semibold grid justify-center items-center pt-4">
      <div className="flex justify-center items-center text-sm md:text-xl uppercase tracking-wider mb-2">
        <div className="h-[2px] w-8 md:w-16 bg-primary-orange"></div>
        <span className="text-primary-orange px-4 ">{header}</span>
        <div className="h-[2px] w-8 md:w-16 bg-primary-orange"></div>
      </div>
      <div
        className="
      justify-between 
      items-center
      text-3xl 
      md:text-4xl
      w-full
      text-center
      border border-blue-800
      "
      >
        <div>
          <span className="tracking-wider mr-4">Explore</span>
          <span className="tracking-wider">Our</span>
        </div>
        <span className="text-primary-orange uppercase tracking-widest">
          {title}
        </span>
      </div>
    </div>
  );
}
