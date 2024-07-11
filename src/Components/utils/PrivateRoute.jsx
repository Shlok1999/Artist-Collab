import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function PrivateRoutes() {
    const {user} = useAuth(); // Replace this with your actual authentication logic
    return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
