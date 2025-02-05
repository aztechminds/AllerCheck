// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import Location from "./components/Location";
import routes from "./routes"; // Import the routes from routes.js

function App() {
  return (
    <div>
      <nav className="p-4 bg-gray-200">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/profile" className="mr-4">
          Profile
        </Link>
        <Link to="/journal" className="mr-4">
          Journal
        </Link>
      </nav>

      <div>
        <Location />
      </div>

      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
