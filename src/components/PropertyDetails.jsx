import React from 'react';

function PropertyDetails({ property }) {
  return (
    <div className="card shadow p-4">
      {property.image && (
        <img
          src={property.image}
          alt={property.title}
          className="img-fluid mb-4 rounded"
          style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
        />
      )}
      <h3>{property.title}</h3>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Rent:</strong> ₹{property.price}</p>
      <p>
        Welcome to your future home! This rental property offers modern living spaces in a prime
        location. Enjoy spacious rooms, premium amenities, and the comfort of a well-connected
        neighborhood.
      </p>
    </div>
  );
}

export default PropertyDetails;
