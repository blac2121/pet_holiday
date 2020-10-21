import React from 'react';
import { Link } from 'react-router-dom';
import EditButton from '../../components/EditButton'
import styled from 'styled-components';

const HouseholdContainer = styled.div`
  border: 3px solid #DAAB5E;
  border-radius: 3px;
  width: 60vw;
  margin: 30px;
  padding-left: 25px;
`

const HouseholdTitle = styled.h4`
  font-size: 24px;
`

const HouseholdCard = (props) => { 

  return (  
    <HouseholdContainer>   
      <Link to={`/households/${props.id}`}>
        <div>
          <HouseholdTitle>{props.name}</HouseholdTitle>
          <p>{props.street} {props.city}, {props.state} {props.zipCode} </p>          
        </div>
      </Link>
      <div>
        <Link to={`/households/${props.id}/edit`}>
          <EditButton />
        </Link>        
      </div>      
    </HouseholdContainer>    
  );
}

export default HouseholdCard;