import AboutPhoto from "./about-photo";
import AboutProfile from "./about-profile";
export default function About() {
  return (
    <div className="flex justify-around items-center">
      <AboutProfile />
      <AboutPhoto />
    </div>
  );
}
