// src/App.jsx

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import Navbar from "./components/Navbar.jsx";

import ProtectedRoute from "./routes/ProtectedRoutes.jsx";

function App() {

  return (
    <div className="bg-black min-h-screen">

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>
    </div>
  );
}

export default App;