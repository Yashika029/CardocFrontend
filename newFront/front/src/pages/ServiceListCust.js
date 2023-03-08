import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ServiceListCust.css'

function ServiceListCust() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/api/services').then((response) => {
      setServices(response.data);
    });
  }, []);

  const handleAddToCart = (serviceId) => {
    // add service with serviceId to cart
  };

  return (
    <div className="service-list">
      <h2>Service List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
              <td>${service.price.toFixed(2)}</td>
              <td>
                <button onClick={() => handleAddToCart(service.id)}>Add to cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceListCust;
