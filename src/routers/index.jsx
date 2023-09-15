import { Routes, Route } from "react-router-dom";
import PublicRouter from "./public-router";
import Home from "../pages/home";
import AboutPhoto from "../component/about-photo";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<PublicRouter />}>
        <Route path="/home" element={<Home />} />
        <Route path="/photo" element={<AboutPhoto />} />
      </Route>
    </Routes>
  );
}
