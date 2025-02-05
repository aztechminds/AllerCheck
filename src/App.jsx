// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import Location from "./components/Location";
import routes from "./routes"; // Import the routes from routes.js
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <Location />
      

      <Routes className="flex-grow pb-16">
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
