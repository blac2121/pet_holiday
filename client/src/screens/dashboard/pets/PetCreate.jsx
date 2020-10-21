import React, { useState } from 'react';
import Layout from '../../../components/shared/Layout';

 const CreatePet = (props) => {
  const [pet, setPet] = useState({
    name: '',
    age: undefined,
    medical_description: '',
    feeding_description: '',
    notes: ''
  })
   
  const { handlePetCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPet({ [name]: value})
  }
   
  const handleSubmit = (e) => {
    e.preventDefault();
    handlePetCreate(pet);
  }

  return (
    <Layout>
      <h3>Add Pet</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={pet.name}
          name='name'
          required
          autoFocus
          onChange={handleChange}
        />
        <label>Age</label>
        <input
          value={pet.age}
          name='price'
          required
          onChange={handleChange}
        />
        <label>Medical Notes</label>
        <textarea
          rows={10}
          value={pet.medical_description}
          name='description'
          required
          onChange={handleChange}
        />
        <label>Feeding Notes</label>
        <textarea
          rows={10}
          value={pet.feeding_description}
          name='description'
          required
          onChange={handleChange}
        />
        <label>Notes</label>
        <textarea
          rows={10}
          value={pet.notes}
          name='description'
          required
          onChange={handleChange}
        />  
        <button type='submit' className="submit-button">Submit</button>
      </form>
    </Layout>
  )
}

 export default CreatePet;
