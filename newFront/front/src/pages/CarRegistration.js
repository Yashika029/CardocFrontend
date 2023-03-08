import React, { useState } from 'react';
import axios from 'axios';
import './CarRegistration.css';


const CarRegistration= () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    fuel: '',
    plateNo: '',
    mfgyear: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/cars', formData);
      console.log(response);
      // Do something with the response, such as show a success message
    } catch (error) {
      console.log(error);
      // Do something with the error, such as show an error message
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (

    <form className="car-registration-form" onSubmit={handleSubmit}>
        <h1>Car Registration</h1>
      <div className="form-group">
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={formData.model}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="fuel">Fuel:</label>
        <input
          type="text"
          id="fuel"
          name="fuel"
          value={formData.fuel}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="plateNo">License Plate Number:</label>
        <input
          type="text"
          id="plateNo"
          name="plateNo"
          value={formData.plateNo}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="plateNo">Manufacturing year</label>
        <input
          type="text"
          id="plateNo"
          name="plateNo"
          value={formData.mfgyear}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default CarRegistration;