import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <h1 className="text-xl font-bold">HiraKataLab</h1>
      </div>
      <div className="flex-none space-x-4">
        <Link to="/" className="btn btn-ghost">Home</Link>
        <Link to="/learn" className="btn btn-ghost">Learn</Link>
        <Link to="/practice" className="btn btn-ghost">Practice</Link>
        <Link to="/quiz" className="btn btn-ghost">Quiz</Link>
        <Link to="/about" className="btn btn-ghost">About</Link>
        <Link to="/contact" className="btn btn-ghost">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;