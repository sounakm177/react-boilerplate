import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Dashboard = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <>
            <h1>Dashboard</h1>
            <button className="button" onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Dashboard;