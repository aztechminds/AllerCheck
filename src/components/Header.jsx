import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="p-4 bg-gray-200">
      <Link to="/" className="mr-4 text-blue-500 hover:text-blue-700">
        Home
      </Link>
      <Link to="/profile" className="mr-4 text-blue-500 hover:text-blue-700">
        Profile
      </Link>
      <Link to="/journal" className="mr-4 text-blue-500 hover:text-blue-700">
        Journal
      </Link>
    </nav>
  );
}
