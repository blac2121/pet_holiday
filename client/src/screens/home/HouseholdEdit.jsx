import React, { useState } from 'react';
import Layout from '../../components/shared/Layout';

 const EditHousehold = (props) => {
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
   
  const { handleHouseholdEdit } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHousehold({
      ...household,
      [name]: value
    })
  }
   
  const handleSubmit = (e) => {
    e.preventDefault();
    handleHouseholdEdit(household);
  }

  return (
    <Layout>
      <h3>Add Household</h3>
      <form onSubmit={handleSubmit}>
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
        <button type='submit'>Submit</button>
      </form>
    </Layout>
  )
}

 export default EditHousehold;