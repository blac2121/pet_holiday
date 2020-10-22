import React from 'react';
import { Link } from 'react-router-dom';
import EditButton from '../../../components/EditButton';
import DeleteButton from '../../../components/DeleteButton';
import '../dashboard.css';
import styled from 'styled-components';

const ContactContainer = styled.div`
  border: 2px solid #65379C;;
  border-radius: 5px;
  margin: 50px;
  padding: 15px 25px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
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
      <div className="header-container">
        <h3 className="card-title">{props.name}</h3>
        <Link to={`/households/${props.household.id}/contacts/${props.contactID}/edit`}>
          <EditButton />
        </Link>           
      </div>      
      <Grid>
        <p className="card-labels">Relationship</p>
        <p className="card-text contact-font">{props.relationship}</p>
        <p className="card-labels">Phone Number</p>
        <p className="card-text contact-font">{props.phoneNum}</p>
        <p className="card-labels">Notes</p>
        <p className="card-text contact-font">{props.notes}</p>       
      </Grid>
      <div>
        <DeleteButton label="Delete" onClick={handleClick}></DeleteButton>
      </div>   
    </ContactContainer>      
  );
}

export default ContactCard;