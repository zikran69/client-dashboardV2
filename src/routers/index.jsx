import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/home";
import PublicRouter from './public-router';

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<PublicRouter />} >
                <Route path="/home" element={<Home />} />
            </Route>
        </Routes>
    )
}