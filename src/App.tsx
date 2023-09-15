import { BrowserRouter } from "react-router-dom";
import Router from "./routers/index.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
