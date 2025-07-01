import React from 'react';
import { Link } from 'react-router-dom';

function PropertyList({ properties }) {
  return (
    <div className="row">
      {properties.map((property) => (
        <div key={property.id} className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            {property.image && (
              <div
                style={{
                  height: '250px',
                  backgroundColor: '#f8f9fa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
            )}
            <div className="card-body">
              <h5 className="card-title">{property.title}</h5>
              <p className="text-muted">{property.location}</p>
              <p className="fw-bold">₹{property.price}</p>
              <Link to={`/properties/${property.id}`} className="btn btn-outline-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
