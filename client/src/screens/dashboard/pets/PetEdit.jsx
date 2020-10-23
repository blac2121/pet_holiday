import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePet } from '../../../services/pets';
import Layout from '../../../components/shared/Layout';
import SubmitButton from '../../../components/SubmitButton';
import '../../forms.css';

const EditPet = (props) => {
  const [pet, setPet] = useState({
    name: '',
    img: '',
    age: 0,
    medical_description: '',
    feeding_description: '',
    notes: '',
    household_id: ''
  })
   
  const { handlePetEdit } = props;
  const { id, pet_id } = useParams();
   
  useEffect(() => {
    const fetchPet = async () => {
      const petData = await getOnePet(id, pet_id);
      setPet(petData);
    }
    fetchPet();
  }, [id, pet_id])

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
    handlePetEdit(id, pet, pet_id);
  }

  return (
    <Layout>
      <div className="form-panel pet">
        <div className="form-heading">
          <h3 className="form-title pet">Edit</h3>
        </div> 
        <form onSubmit={handleSubmit} className="form-container">
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
          <div className="form-footer">
            <SubmitButton label="Save" onClick={handleSubmit} />
          </div>
        </form>
      </div>  
    </Layout>
  )
}

 export default EditPet;