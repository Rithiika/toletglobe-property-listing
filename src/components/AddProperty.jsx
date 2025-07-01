// src/components/AddProperty.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/main.css';

const AddProperty = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    description: '',
    rent: '',
    image: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    const token = localStorage.getItem('token');

    if (!token) {
      setMessage('You must be logged in to add a property.');
      return;
    }

    try {
      await axios.post(
        'https://propertylisting-9.onrender.com/api/properties/add',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage('Property added successfully!');
      setFormData({
        title: '',
        location: '',
        description: '',
        rent: '',
        image: '',
      });
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to add property.');
    }
  };

  return (
    <div className="page-wrapper">
      <div className="form-box">
        <h2>Add Property</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Property Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
          <input
            type="number"
            name="rent"
            placeholder="Monthly Rent"
            value={formData.rent}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
          />
          {message && (
            <p className={message.includes('successfully') ? 'info-msg' : 'error-msg'}>
              {message}
            </p>
          )}
          <button type="submit">Add Property</button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
