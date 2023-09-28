import about from "../assets/about-photo.json";
export default function AboutPhoto() {
  const photo = about;
  return (
    <div className="lg:w-[450px] pt-2 w-full">
      <div className="flex justify-start xl:justify-end">
        <img
          src={photo[0].image}
          className="lg:w-[200px] w-[500px] rounded-lg drop-shadow-2xl "
        />
      </div>
      <div className="flex justify-center py-2">
        <img
          src={photo[2].image}
          className="lg:w-[300px] w-[600px] rounded-lg drop-shadow-2xl"
        />
      </div>
      <div className="flex justify-end xl:justify-start">
        <img
          src={photo[1].image}
          className="lg:w-[200px] w-[400px] rounded-lg drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
