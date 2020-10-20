import React from 'react';

const ContactCard = (props) => {  
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.relationship}</p>
      <p>{props.phoneNum}</p>
      <p>{props.notes}</p>
    </div>      
  );
}

export default ContactCard;