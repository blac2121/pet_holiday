import React from 'react';
import { Link } from 'react-router-dom';
import EditButton from '../../../components/EditButton';
import DeleteButton from '../../../components/DeleteButton';
import '../dashboard.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ContactAvatar =
  <FontAwesomeIcon
    icon={faUser}
    size="4x"
    color="#65379C"
  />

const ContactContainer = styled.div`
  border: 2px solid #65379C;
  border-radius: 5px;
  margin: 50px;
  padding: 15px 25px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 175px 60%;
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
        <div className="heading">
          <i>{ContactAvatar}</i>
          <h3 className="card-title">{props.name}</h3> 
        </div>       
        <Link to={`/households/${props.household.id}/contacts/${props.contactID}/edit`}>
          <EditButton />
        </Link>           
      </div>      
      <Grid>
        {props.relationship  === null 
          ? null
          : <>
              <p className="card-labels">Relationship</p>
              <p className="card-text contact-font">{props.relationship}</p>
            </>            
        } 
        {props.phoneNum  === null
          ? null
          : <>
              <p className="card-labels">Phone Number</p>
              <p className="card-text contact-font">{props.phoneNum}</p>
            </>            
        } 
        {props.notes
          ? null
          : <>
              <p className="card-labels">Notes</p>
              <p className="card-text contact-font">{props.notes}</p>     
            </>            
        }      
      </Grid>
      <div>
        <DeleteButton label="Delete" onClick={handleClick}></DeleteButton>
      </div>   
    </ContactContainer>      
  );
}

export default ContactCard;