import React from 'react';

const FamilyDetailCard = (props) => {  
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.street}</p>
      <p>{props.city}</p>
      <p>{props.state}</p>
      <p>{props.zipCode}</p>
      <p>{props.tempLow}</p>
      <p>{props.tempHi}</p>
      <p>{props.wifiUsername}</p>
      <p>{props.wifiPassword}</p>
      <p>{props.notes}</p>
    </div>      
  );
}

export default FamilyDetailCard;