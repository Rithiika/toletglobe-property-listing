import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">To-Let Globe</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">🏠 Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/properties" className="nav-link">📋 Property Listings</Link>
            </li>
            {isLoggedIn && (
              <li className="nav-item">
                <Link to="/add-property" className="nav-link">➕ Add Property</Link>
              </li>
            )}
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">🔐 Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">🧾 Register</Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button onClick={handleLogout} className="btn btn-outline-light ms-2">🔓 Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
