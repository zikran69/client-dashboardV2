import { Routes, Route } from "react-router-dom";
import Home from "../pages/home"
import PublicRouter from './public-router';
import Api from "../pages/api"

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<PublicRouter />} >
                <Route path="/home" element={<Home />} />
                <Route path="/api" element={<Api />} />
            </Route>
        </Routes>
    )
}