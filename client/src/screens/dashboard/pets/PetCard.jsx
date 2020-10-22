import React from 'react';
import { Link } from 'react-router-dom';
import EditButton from '../../../components/EditButton';
import DeleteButton from '../../../components/DeleteButton';
import '../dashboard.css';
import styled from 'styled-components';

const PetContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid #DFDFDF;
  border-radius: 3px;
  margin: 40px;
  padding: 15px 25px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
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
        <div className="header-container">
          <h3 className="card-title">{props.name}</h3>
          <Link to={`/households/${props.household.id}/pets/${props.petID}/edit`}>
            <EditButton />
          </Link>  
        </div>        
        <Grid>         
          <p className="card-labels">Age</p>
          <p className="card-text pet-font">{props.age}</p>
          <p className="card-labels">Medical</p>
          <p className="card-text pet-font">{props.medical}</p>
          <p className="card-labels">Feeding</p>
          <p className="card-text pet-font">{props.feeding}</p>
          <p className="card-labels">Notes</p>
          <p className="card-text pet-font">{props.notes}</p>          
        </Grid>
        <DeleteButton onClick={handleClick}></DeleteButton>      
      </PetContainer> 
    </>  
  );
}

export default PetCard;