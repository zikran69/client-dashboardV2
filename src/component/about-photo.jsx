import lobby from "../assets/lobby-area.json";
export default function AboutPhoto() {
  const photo = lobby;
  return (
    <div className="w-fit max-w-[300px]">
      <div className="flex justify-end">
        <img src={photo[0].image} className="w-[200px] pr-4" />
      </div>
      <div className="py-2">
        <img src={photo[2].image} className="w-[300px]" />
      </div>
      <div className="flex justify-start pl-4">
        <img src={photo[1].image} className="w-[200px]" />
      </div>
    </div>
  );
}
