import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agreeTerms: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const provinces = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
  ];

  return (
    <div className="App">
      <div className="form-container">
        <h1>Data Entry Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fullName">Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="1234 Main St"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="address2">Address 2</label>
            <input
              type="text"
              id="address2"
              name="address2"
              placeholder="Apartment, studio, or floor"
              value={formData.address2}
              onChange={handleChange}
            />
          </div>

          <div className="form-row three-cols">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="province">Province</label>
              <select
                id="province"
                name="province"
                value={formData.province}
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                {provinces.map((prov) => (
                  <option key={prov} value={prov}>
                    {prov}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-checkbox">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <label htmlFor="agreeTerms">Agree Terms & Condition?</label>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        {submittedData && (
          <div className="submitted-data">
            <p>
              <span className="label">Email:</span> {submittedData.email}
            </p>
            <p>
              <span className="label">Full Name:</span> {submittedData.fullName}
            </p>
            <p>
              <span className="label">Address:</span> {submittedData.address}
            </p>
            <p>
              <span className="label">City:</span> {submittedData.city}
            </p>
            <p>
              <span className="label">Province:</span> {submittedData.province}
            </p>
            <p>
              <span className="label">Postal Code:</span>{' '}
              {submittedData.postalCode}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
