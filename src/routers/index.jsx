import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/home";
import PrivateRouter from './private-router';

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<PrivateRouter />} >
                <Route path="/home" element={<Home />} />
            </Route>
        </Routes>
    )
}