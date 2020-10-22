import React from 'react';
import { Link } from 'react-router-dom';
import EditButton from '../../../components/EditButton';
import styled from 'styled-components';

const PetContainer = styled.div`
  border: 3px solid #DFDFDF;
  border-radius: 3px;
  margin: 40px;
  padding: 15px 25px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
`

const PetCard = (props) => {  

  const { handlePetDelete } = props;
  const id = props.household.id
  const pet_id = props.petID

  const handleClick = (e) => {
    e.preventDefault();
    handlePetDelete(id, pet_id);
  }
  
  return (   
    <>       
      <PetContainer>
        <h3>{props.name}</h3>
        <p>{props.age}</p>
        <p>{props.medical}</p>
        <p>{props.feeding}</p>
        <p>{props.notes}</p>
        <div>
          <Link to={`/households/${props.household.id}/pets/${props.petID}/edit`}>
            <EditButton />
          </Link>   
          <button onClick={handleClick}>Delete</button> 
        </div>        
      </PetContainer> 
    </>  
  );
}

export default PetCard;