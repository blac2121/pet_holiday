import React from 'react';
import { Link } from 'react-router-dom';
import EditButton from '../../../components/EditButton';
import DeleteButton from '../../../components/DeleteButton';
import '../dashboard.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDog } from "@fortawesome/free-solid-svg-icons";

const PetAvatar =
  <FontAwesomeIcon
    icon={faDog}
    size="4x"
    color="#488047"
  />


const PetContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #488047;
  border-radius: 5px;
  margin: 50px;
  padding: 15px 25px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px 60%;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
          <div className="heading">
            <i>{PetAvatar}</i>
            <h3 className="card-title">{props.name}</h3>            
          </div>
          <Link to={`/households/${props.household.id}/pets/${props.petID}/edit`}>
            <EditButton />
          </Link>  
        </div>        
        <Grid> 
          {props.age  === null 
            ? null
            : <>
                <p className="card-labels">Age</p>
                <p className="card-text pet-font">{props.age}</p>
              </>            
          }
          {props.medical  === null 
          ? null
          : <>
              <p className="card-labels">Medical</p>
              <p className="card-text pet-font">{props.medical}</p>
            </>            
          } 
          {props.feeding  === null 
          ? null
          : <>
              <p className="card-labels">Feeding</p>
              <p className="card-text pet-font">{props.feeding}</p>
            </>            
          } 
          {props.notes  === null 
          ? null
          : <>
              <p className="card-labels">Notes</p>
              <p className="card-text pet-font">{props.notes}</p>   
            </>            
          }                
        </Grid>
        <DeleteButton onClick={handleClick}></DeleteButton>      
      </PetContainer> 
    </>  
  );
}

export default PetCard;