import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Location from "./components/Location";

function App() {
  return (
    <div>
      <nav className="p-4 bg-gray-200">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <div>
        <h1 className="text-2xl font-bold p-4">Allercheck</h1>
        <Location />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
