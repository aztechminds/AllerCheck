import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-gray-800 py-4 text-center w-full">
      <Link to="/" className="mr-4 text-white hover:text-blue-700">
        Home
      </Link>
      <Link to="/profile" className="mr-4 text-white hover:text-blue-700">
        Profile
      </Link>
      <Link to="/journal" className="mr-4 text-white hover:text-blue-700">
        Journal
      </Link>
    </nav>
  );
}
