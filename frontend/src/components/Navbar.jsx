import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-50 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-green-700 text-xl font-bold">Farm Soil</h1>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="text-green-600 font-medium hover:text-green-800 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-green-600 font-medium hover:text-green-800 transition duration-300">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-green-600 font-medium hover:text-green-800 transition duration-300">Contact Us</Link>
          </li>
          <li>
            <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">Login / Register</Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-green-50">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-green-600 font-medium hover:text-green-800 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block text-green-600 font-medium hover:text-green-800 transition duration-300">About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-green-600 font-medium hover:text-green-800 transition duration-300">Contact Us</Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setIsOpen(false)} className="block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300 text-center">Login / Register</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;