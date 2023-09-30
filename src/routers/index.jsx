import { Routes, Route } from "react-router-dom";
import PublicRouter from "./public-router";
import Home from "../pages/home";
import Footer from "../component/footer";
import ViewDetail from "../component/ViewDetail";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<PublicRouter />}>
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
      </Route>
      <Route path="/ViewDetail" element={<ViewDetail />} />
    </Routes>
  );
}
