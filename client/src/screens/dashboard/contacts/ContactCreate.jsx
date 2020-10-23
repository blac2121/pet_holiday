import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../../components/shared/Layout';
import '../../forms.css';

const CreateContact = (props) => {
  const [contact, setContact] = useState({
    name: '',
    img: '',
    relationship: '',
    phone_num: '',
    notes: '',
    household_id: ''
  })
  
  const { handleContactCreate } = props;
  const { id } = useParams();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
      household_id: id
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleContactCreate(parseInt(id), contact);
  }

  return (
    <Layout>
      <h3>Add Contact</h3>
      <form onSubmit={handleSubmit} className="form-container">
        <label>Name</label>
        <input
          value={contact.name || ''}
          name='name'
          required
          autoFocus
          onChange={handleChange}
        />
        <label>Profile Picture</label>
        <input
          value={contact.img || ''}
          name='img'
          onChange={handleChange}
        />        
        <label>Relationship</label>
        <input
          value={contact.relationship || ''}
          name='relationship'
          onChange={handleChange}
        />
        <label>Phone Number</label>
        <input
          value={contact.phone_num || ''}
          name='phone_num'
          onChange={handleChange}
        />
        <label>Notes</label>
        <input
          value={contact.notes || ''}
          name='notes'
          onChange={handleChange}
        />  
        <button type='submit'>Submit</button>
      </form>
    </Layout>
  )
}

export default CreateContact;