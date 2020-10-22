import React from 'react';
import { Link } from 'react-router-dom';
import EditButton from '../../../components/EditButton';
import styled from 'styled-components';

const ContactContainer = styled.div`
  border: 3px solid #DFDFDF;
  border-radius: 3px;
  margin: 30px;
  padding: 15px 25px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
`

const ContactCard = (props) => {  

  const { handleContactDelete } = props;
  const id = props.household.id
  const contact_id = props.contactID

  const handleClick = (e) => {
    e.preventDefault();
    handleContactDelete(id, contact_id);
  }

  return (
    <ContactContainer>
      <h3>{props.name}</h3>
      <p>{props.relationship}</p>
      <p>{props.phoneNum}</p>
      <p>{props.notes}</p>
      <div>
        <Link to={`/households/${props.household.id}/contacts/${props.contactID}/edit`}>
          <EditButton />
        </Link>   
        <button onClick={handleClick}>Delete</button> 
      </div>   
    </ContactContainer>      
  );
}

export default ContactCard;