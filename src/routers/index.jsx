import { Routes, Route } from "react-router-dom";
import PublicRouter from "./public-router";
import Home from "../pages/home";
import Footer from "../component/footer";
import ViewDetail from "../component/ViewDetail";
import LoginPage from "../pages/login-page";
import BookNowPage from "../pages/BookNowPage";
import Register from "../pages/register";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<PublicRouter />}>
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/register" element={<Register />} />
      </Route>
      {/* <Route path="/book-now/*" element={<BookNowPage />} /> */}
      <Route path="/:source/book-now/*" element={<BookNowPage />} />
      <Route path="/ViewDetail" element={<ViewDetail />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
