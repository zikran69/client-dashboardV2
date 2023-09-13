import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouter(){
    return(
        <div>
            <Outlet />
            <Navigate to='/home' />
        </div>
    )
}