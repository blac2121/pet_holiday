import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneHousehold } from '../../../services/households';

import Layout from '../../../components/shared/Layout';


const EditPet = (props) => {
  const [household, setHousehold] = useState([]);
  const [pet, setPet] = useState({
    name: '',
    img: '',
    age: 0,
    medical_description: '',
    feeding_description: '',
    notes: '',
    household_id: ''
  })
   
  const { handlePetEdit, households } = props;
  const { id } = useParams();
   
  useEffect(() => {
  const fetchHousehold = async () => {
    const householdData = await getOneHousehold(id);
    setHousehold(householdData);
  }
  fetchHousehold();
  }, [id])

  console.log(household); 
  
  // useEffect(() => {
  //   const prefillFormData = () => {
  //     const { name, img, age, medical_description, feeding_description, notes, household_id } = household.pets.find(pet => pet.id === Number(id));
  //     setPet({ name, img, age, medical_description, feeding_description, notes, household_id });
  //   }
  //   if (household.pets.length) {
  //     prefillFormData()
  //   }
  // }, [household, id])
   
  const handleChange = (e) => {
    const target = e.target;
    const { name } = target;
    const value = target.name === "age" ? parseInt(target.value) : target.value;
    setPet({
      ...pet,
      [name]: value,
      household_id: id
    });
  };
   
  const handleSubmit = (e) => {
    e.preventDefault();
    handlePetEdit(parseInt(id), pet);
  }

  return (
    <Layout>
      <h3>Edit {pet.name}</h3>
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

 export default EditPet;