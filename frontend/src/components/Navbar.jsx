import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className="flex items-center justify-between px-8 py-4 border-b border-white/10 backdrop-blur-xl bg-white/5">

            <Link
                to="/"
                className="text-2xl font-bold text-white"
            >
                BlogApp
            </Link>

            <div>
                <h2 className="text-white">
                Welcome, {user?.name}
                </h2>
            </div>

            <div className="flex gap-4">

                {!token ? (
                    <>
                        <Link
                            to="/login"
                            className="px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="px-4 py-2 rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition"
                        >
                            Register
                        </Link>
                    </>
                ) : (
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                )}

            </div>
            
        </nav>
    );
}

export default Navbar;