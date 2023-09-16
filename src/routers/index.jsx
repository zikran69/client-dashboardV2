import { Routes, Route } from "react-router-dom";
import PublicRouter from "./public-router";
import Home from "../pages/home";
import Card from "../component/card";
import MyCarousel from "../component/carousel";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<PublicRouter />}>
        <Route path="/MyCarousel" element={<MyCarousel />} />
        <Route path="/home" element={<Home />} />
        <Route path="/card" element={<Card />} />
      </Route>
    </Routes>
  );
}
