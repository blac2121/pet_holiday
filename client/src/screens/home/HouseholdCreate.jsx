import React, { useState } from 'react';
import Layout from '../../components/shared/Layout';
import SubmitButton from '../../components/SubmitButton';
import '../forms.css';

 const CreateHousehold = (props) => {
  const [household, setHousehold] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zip_code: '',
    temp_low: '',
    temp_high: '',
    wifi_password: '',
    wifi_username: '',
    notes: ''
  })
   
  const { handleHouseholdCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHousehold({
      ...household,
      [name]: value
    })
  }
   
  const handleSubmit = (e) => {
    e.preventDefault();
    handleHouseholdCreate(household);
  }

  return (
    <Layout>
      <div className="form-panel famdetail">
        <div className="form-heading">
          <h3 className="form-title famdetail">Add household</h3>
        </div> 
        <form onSubmit={handleSubmit} className="form-container">
          <label>Name</label>
          <input
            value={household.name}
            name='name'
            required
            autoFocus
            onChange={handleChange}
          />
          <label>Street</label>
          <input
            type="text"
            name="street"
            value={household.street}
            onChange={handleChange}
          />
          <label>City</label>
          <input
            value={household.city}
            name='city'
            onChange={handleChange}
          />
          <label>State</label>
          <input
            value={household.state}
            name='state'
            onChange={handleChange}
          />
          <label>Zip Code</label>
          <input
            value={household.zip_code}
            name='zip_code'
            onChange={handleChange}
          />
          <label>Temperature</label>
          <input
            placeholder="low"
            value={household.temp_low}
            name='temp_low'
            onChange={handleChange}
          />
          <input
            placeholder="high"
            value={household.temp_high}
            name='temp_high'
            onChange={handleChange}
          />
          <label>Wifi Username</label>
          <input
            value={household.wifi_username}
            name='wifi_username'
            onChange={handleChange}
          />
          <label>Wifi Password</label>
          <input
            value={household.wifi_password}
            name='wifi_password'
            onChange={handleChange}
          />
          <label>Notes</label>
          <input
            value={household.notes}
            name='notes'
            onChange={handleChange}
          />        
          <div className="form-footer">
            <SubmitButton label="Add" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </Layout>
  )
}

 export default CreateHousehold;