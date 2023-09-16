import { Navigate, Outlet } from "react-router-dom";

export default function PublicRouter() {
  return (
    <div>
      <Outlet />
      <Navigate to="/home" />
    </div>
  );
}
