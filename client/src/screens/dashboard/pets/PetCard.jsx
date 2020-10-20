import React from 'react';

const PetCard = (props) => {  
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.age}</p>
      <p>{props.medical}</p>
      <p>{props.feeding}</p>
      <p>{props.notes}</p>
    </div>      
  );
}

export default PetCard;