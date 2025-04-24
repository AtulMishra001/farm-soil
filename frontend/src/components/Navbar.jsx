import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-50 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-green-700 text-xl font-bold">Farm Soil</h1>
        <ul className="flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-green-600 font-medium hover:text-green-800 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-green-600 font-medium hover:text-green-800 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-green-600 font-medium hover:text-green-800 transition duration-300"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              Login / Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;