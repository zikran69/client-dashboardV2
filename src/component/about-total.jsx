export default function AboutTotal({ title, total, icon }) {
  return (
    <div className="font-roboto border border-zinc-200 w-fit rounded-lg backdrop-blur-sm">
      <div
        className="
      text-center 
      border 
      border-zinc-200 
      w-fit 
      m-1 
      py-8 
      sm:px-8 
      px-16 
      min-[375px]:px-28
      rounded-lg"
      >
        <i className={icon}></i>
        <p className="font-semibold">{total}</p>
        <p className="capitalize">{title}</p>
      </div>
    </div>
  );
}
