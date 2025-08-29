import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Predict from "./pages/Predict";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/predict">Predict</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<div>Welcome to Edu2Job</div>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/predict" element={<Predict />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
