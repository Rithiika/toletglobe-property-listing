import React from 'react';
import '../styles/main.css';

const Footer = () => (
  <footer className="footer py-4 bg-dark text-white">
    <div className="container text-center small">
      <div className="row">
        <div className="col-md-6 mb-3 mb-md-0">
          <h6 className="text-uppercase">Services</h6>
          <ul className="list-unstyled footer-services">
            <li>🏠 Property Listings</li>
            <li>🔑 Rental Solutions</li>
            <li>📊 Landlord Tools</li>
            <li>👥 Tenant Support</li>
            <li>🎥 Virtual Tours</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h6 className="text-uppercase">Reach Us</h6>
          <ul className="list-unstyled footer-contact">
            <li><strong>Email:</strong> hello@toletglobe.in</li>
            <li><strong>Phone:</strong> +91-8707727347</li>
            <li><strong>Address:</strong> D/122 Vipulkhand, Gomtinagar, Lucknow</li>
          </ul>
        </div>
      </div>
      <div className="mt-3">© 2025 To-Let Globe. All Rights Reserved.</div>
    </div>
  </footer>
);

export default Footer;