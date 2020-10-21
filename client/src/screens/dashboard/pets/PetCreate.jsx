import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../../components/shared/Layout';

 const CreatePet = (props) => {
  const [pet, setPet] = useState({
    name: '',
    img: '',
    age: 0,
    medical_description: '',
    feeding_description: '',
    notes: ''
  })
   
  const { handlePetCreate } = props;
  const { id } = useParams();
   

  const handleChange = (e) => {
    const target = e.target;
    const { name } = target;
    const value = target.name === "age" ? parseInt(target.value) : target.value;
    setPet({
      ...pet,
      [name]: value,
    });
  };
   
  const handleSubmit = (e) => {
    e.preventDefault();
    handlePetCreate(parseInt(id), pet);
  }

  return (
    <Layout>
      <h3>Add Pet</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={pet.name || ''}
          name='name'
          required
          autoFocus
          onChange={handleChange}
        />
        <label>Age</label>
        <input
          value={pet.age || 0}
          name='age'
          onChange={handleChange}
        />
        <label>Img </label>
        <input
          value={pet.img || ''}
          name='img'
          onChange={handleChange}
        />
        <label>Medical Notes</label>
        <input
          value={pet.medical_description || ''}
          name='medical_description'
          onChange={handleChange}
        />
        <label>Feeding Notes</label>
        <input
          value={pet.feeding_description || ''}
          name='feeding_description'
          onChange={handleChange}
        />
        <label>Notes</label>
        <input
          value={pet.notes || ''}
          name='notes'
          onChange={handleChange}
        />  
        <button type='submit'>Submit</button>
      </form>
    </Layout>
  )
}

 export default CreatePet;
