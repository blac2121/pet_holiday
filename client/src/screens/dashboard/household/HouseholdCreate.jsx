import React, { useState } from 'react';
import Layout from '../../../components/shared/Layout';

 const CreateHousehold = (props) => {
  const [household, setHousehold] = useState({
    name: ''
  })
   
  const { handleHouseholdCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHousehold({ [name]: value})
  }
   
  const handleSubmit = (e) => {
    e.preventDefault();
    handleHouseholdCreate(household);
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
        <button type='submit'>Submit</button>
      </form>
    </Layout>
  )
}

 export default CreateHousehold;