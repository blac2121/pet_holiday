import React from 'react';
import { Link } from 'react-router-dom';

import EditButton from '../../../components/EditButton';

import styled from 'styled-components';

const PetContainer = styled.div`
  // border: 3px solid #488047;
  border: 3px solid #DFDFDF;
  border-radius: 3px;
  margin: 40px;
  padding: 15px 25px;
  // box-shadow: 0 20px 25px -5px rgba(72, 128, 71, 0.4);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
`

const PetCard = (props) => {  
  return (   
    <>       
      <PetContainer>
        <h3>{props.name}</h3>
        <p>{props.age}</p>
        <p>{props.medical}</p>
        <p>{props.feeding}</p>
        <p>{props.notes}</p>
        <div>
          <Link to={`/households/${props.id}/pets/${props.id}/edit`}>
            <EditButton />
          </Link>   
        </div>        
      </PetContainer> 
    </>  
  );
}

export default PetCard;