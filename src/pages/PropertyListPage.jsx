import React, { useState } from 'react';
import PropertyList from '../components/PropertyList';

const mockProperties = [
  {
    id: 1,
    title: 'Elegant 2BHK Apartment',
    location: 'Aliganj, Lucknow',
    price: 12500,
    image: '/house1.jpg',
    description: 'Spacious 2BHK apartment with a modern look and ample sunlight in Aliganj.',
  },
  {
    id: 2,
    title: 'Stylish 3BHK Family Home',
    location: 'Gomti Nagar, Lucknow',
    price: 18500,
    image: '/house2.jpg',
    description: 'Luxury 3BHK family home with modular kitchen, located in the heart of Gomti Nagar.',
  },
  {
    id: 3,
    title: 'Cozy 1RK Studio',
    location: 'Hazratganj, Lucknow',
    price: 7500,
    image: '/house3.jpg',
    description: 'Well-lit 1RK studio with all basic amenities for students and professionals.',
  },
  {
    id: 4,
    title: 'Modern Duplex House',
    location: 'Indira Nagar, Lucknow',
    price: 20000,
    image: '/house4.webp',
    description: 'Contemporary duplex house with parking, near metro and markets.',
  },
  {
    id: 5,
    title: '1BHK with Balcony View',
    location: 'Mahanagar, Lucknow',
    price: 8900,
    image: '/house5.webp',
    description: 'Furnished 1BHK apartment with beautiful balcony and kitchen setup.',
  },
  {
    id: 6,
    title: 'Luxury Interior Flat',
    location: 'Chinhat, Lucknow',
    price: 14500,
    image: '/img-1707349210324.webp',
    description: 'Interior-designed flat with smart lighting and spacious living room.',
  },
];

const ITEMS_PER_PAGE = 3;

function PropertyListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [locationFilter, setLocationFilter] = useState('');
  const [sortOption, setSortOption] = useState('new');

  const filtered = mockProperties.filter(
    (p) => !locationFilter || p.location.includes(locationFilter)
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortOption === 'low') return a.price - b.price;
    if (sortOption === 'high') return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = sorted.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Browse Properties</h2>

      {/* Filters */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={locationFilter}
            onChange={(e) => {
              setLocationFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">All Locations</option>
            <option value="Aliganj">Aliganj</option>
            <option value="Gomti Nagar">Gomti Nagar</option>
            <option value="Hazratganj">Hazratganj</option>
            <option value="Indira Nagar">Indira Nagar</option>
            <option value="Mahanagar">Mahanagar</option>
            <option value="Chinhat">Chinhat</option>
          </select>
        </div>
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={sortOption}
            onChange={(e) => {
              setSortOption(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="new">Sort by Rent</option>
            <option value="low">Lowest to Highest</option>
            <option value="high">Highest to Lowest</option>
          </select>
        </div>
      </div>

      {/* Property List */}
      <PropertyList properties={currentItems} />

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <button
          className="btn btn-outline-secondary"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ← Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          className="btn btn-outline-secondary"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default PropertyListPage;
