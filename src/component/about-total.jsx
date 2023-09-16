export default function AboutTotal({ title, total, icon }) {
  return (
    <div className="font-roboto border border-zinc-200 rounded-sm w-fit">
      <div className="text-center border border-zinc-200 rounded-sm w-fit m-1 py-8 sm:px-8  md:w-[200px] px-32">
        <i class={icon}></i>
        <p className="text-2xl font-semibold">{total}</p>
        <p className="capitalize">{title}</p>
      </div>
    </div>
  );
}
