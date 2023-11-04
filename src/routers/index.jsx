import { Routes, Route } from "react-router-dom";
import PublicRouter from "./public-router";
import Home from "../pages/home";
import Footer from "../component/footer";
import ViewDetail from "../component/ViewDetail";
import LoginPage from "../pages/login-page";
import BookNowPage from "../pages/BookNowPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<PublicRouter />}>
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
      </Route>
      <Route path="/:source/book-now/*" element={<BookNowPage />} />
      <Route path="/ViewDetail" element={<ViewDetail />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
