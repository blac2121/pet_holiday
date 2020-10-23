import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../../components/shared/Layout';
import SubmitButton from '../../../components/SubmitButton';
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
      <div className="form-panel contact">
        <div className="form-heading">
          <h3 className="form-title contact">Add Contact</h3>
        </div> 
        <form onSubmit={handleSubmit} className="form-container">
          <label>Name</label>
          <input
            value={contact.name || ''}
            name='name'
            required
            autoFocus
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
          <div className="form-footer">
            <SubmitButton label="Add" onClick={handleSubmit} />
          </div>
        </form>
      </div>  
    </Layout>
  )
}

export default CreateContact;