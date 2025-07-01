import React from 'react';
import { useParams, Link } from 'react-router-dom';

const mockProperties = [
  {
    id: 1,
    title: 'Elegant 2BHK Apartment',
    location: 'Aliganj, Lucknow',
    price: 12500,
    image: '/house1.jpg',
    description: 'Spacious 2BHK apartment with a modern look and ample sunlight in Aliganj. Located in a calm residential area with access to parks, schools, and local markets. Ideal for small families or working professionals looking for peaceful living.',
  },
  {
    id: 2,
    title: 'Stylish 3BHK Family Home',
    location: 'Gomti Nagar, Lucknow',
    price: 18500,
    image: '/house2.jpg',
    description: 'Luxury 3BHK family home with modular kitchen, located in the heart of Gomti Nagar. Comes with a covered parking space, private balcony, and spacious living room. Excellent neighborhood for families with kids.',
  },
  {
    id: 3,
    title: 'Cozy 1RK Studio',
    location: 'Hazratganj, Lucknow',
    price: 7500,
    image: '/house3.jpg',
    description: 'Well-lit 1RK studio with all basic amenities for students and professionals. Located close to cafes, metro, and shopping streets. Perfect for individuals seeking a budget-friendly, convenient lifestyle.',
  },
  {
    id: 4,
    title: 'Modern Duplex House',
    location: 'Indira Nagar, Lucknow',
    price: 20000,
    image: '/house4.webp',
    description: 'Contemporary duplex house with spacious interiors and private driveway. Located in a prime residential area near schools and IT offices. Ideal for larger families wanting comfort and style.',
  },
  {
    id: 5,
    title: '1BHK with Balcony View',
    location: 'Mahanagar, Lucknow',
    price: 8900,
    image: '/house5.webp',
    description: 'Furnished 1BHK apartment with beautiful balcony and modular kitchen. Located in a secure gated society with lift, CCTV, and power backup. Best suited for bachelors or couples.',
  },
  {
    id: 6,
    title: 'Luxury Interior Flat',
    location: 'Chinhat, Lucknow',
    price: 14500,
    image: '/img-1707349210324.webp',
    description: 'Interior-designed 2BHK flat with smart lighting, designer ceilings, and elegant flooring. Located near shopping malls, hospitals, and transport facilities. A premium experience at an affordable rate.',
  },
];

function PropertyDetailsPage() {
  const { id } = useParams();
  const property = mockProperties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="container text-center my-5">
        <h4>Property not found</h4>
        <Link to="/properties" className="btn btn-primary mt-3">
          Back to Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row mb-4">
        <div className="col-md-6">
          <img
            src={property.image}
            alt={property.title}
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <h2>{property.title}</h2>
          <p className="text-muted">{property.location}</p>
          <h4 className="text-success mb-3">₹{property.price.toLocaleString()}</h4>
          <p className="mb-4">{property.description}</p>
          <Link to="/properties" className="btn btn-outline-primary">
            ← Back to Listings
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetailsPage;
