import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div className="container text-center my-5">
      <h1 className="display-4 fw-bold text-dark">Welcome to To-Let Globe</h1>

      <p className="home-lead">Your smart solution for effortless property rentals.</p>
      <p className="home-lead">Explore, list, and manage properties seamlessly – all in one place.</p>
      <p className="home-lead mb-4">Join hundreds of users who trust To-Let Globe for their rental needs.</p>

      <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
        <Link to="/properties" className="btn btn-primary btn-lg">🏠 Property Listings</Link>
        {isLoggedIn && <Link to="/add-property" className="btn btn-success btn-lg">➕ Add Property</Link>}
        <Link to="/login" className="btn btn-outline-secondary btn-lg">🔑 Login</Link>
      </div>
    </div>
  );
}

export default HomePage;
