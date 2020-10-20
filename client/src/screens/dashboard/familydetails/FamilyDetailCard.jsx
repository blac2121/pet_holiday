import React from 'react';
import styled from 'styled-components';

const FamilyDetailContainer = styled.div`
  border: 3px solid #DFDFDF;
  border-radius: 3px;
  margin: 30px;
  padding: 15px 25px;
  box-shadow: 0 10px 25px -5px rgba(35, 48, 158, 0.4);
`

const FamilyDetailCard = (props) => {  
  return (
    <FamilyDetailContainer>
      <h3>{props.name}</h3>
      {/* <p>{props.street}</p>
      <p>{props.city}</p>
      <p>{props.state}</p>
      <p>{props.zipCode}</p> */}
      <p>{props.street} {props.city}, {props.state} {props.zipCode} </p>
      <p>{props.tempLow}</p>
      <p>{props.tempHi}</p>
      <p>{props.wifiUsername}</p>
      <p>{props.wifiPassword}</p>
      <p>{props.notes}</p>
    </FamilyDetailContainer>      
  );
}

export default FamilyDetailCard;