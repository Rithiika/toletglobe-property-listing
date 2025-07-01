import React from 'react';
import { Link } from 'react-router-dom';

function PropertyCard({ property }) {
  return (
    <div className="card mb-4 shadow-sm">
      <div id={`carousel-${property._id}`} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {property.images?.map((img, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={img} className="d-block w-100" style={{ height: '200px', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
      <div className="card-body">
        <h5>{property.title}</h5>
        <p>{property.location}</p>
        <p>₹{property.rent} / month</p>
        <Link to={`/properties/${property._id}`} className="btn btn-sm btn-primary">View Details</Link>
      </div>
    </div>
  );
}

export default PropertyCard;
