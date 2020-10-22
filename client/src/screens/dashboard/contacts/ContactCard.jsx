import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  border: 3px solid #DFDFDF;
  border-radius: 3px;
  margin: 30px;
  padding: 15px 25px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
`

const ContactCard = (props) => {  
  return (
    <ContactContainer>
      <h3>{props.name}</h3>
      <p>{props.relationship}</p>
      <p>{props.phoneNum}</p>
      <p>{props.notes}</p>
    </ContactContainer>      
  );
}

export default ContactCard;