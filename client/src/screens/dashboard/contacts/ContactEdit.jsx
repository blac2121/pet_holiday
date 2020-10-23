import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneContact } from '../../../services/contacts';
import Layout from '../../../components/shared/Layout';
import SubmitButton from '../../../components/SubmitButton';
import '../../forms.css';



const EditContact = (props) => {
  const [contact, setContact] = useState({
    name: '',
    img: '',
    relationship: '',
    phone_num: '',
    notes: '',
    household_id: ''
  })
  
  const { handleContactEdit } = props;
  const { id, contact_id } = useParams();

  useEffect(() => {
    const fetchContact = async () => {
      const contactData = await getOneContact(id, contact_id);
      setContact(contactData);
    }
    fetchContact();
  }, [id, contact_id])

  
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
    handleContactEdit(id, contact, contact_id);
  }

  return (
    <Layout>
      <div className="form-panel contact">
        <div className="form-heading">
          <h3 className="form-title contact">Edit {props.name}</h3>
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
            <SubmitButton label="Save" onClick={handleSubmit} />
          </div>
        </form>
      </div>  
    </Layout>
  )
}

export default EditContact;