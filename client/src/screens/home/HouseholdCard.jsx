import React from 'react';
import { Link } from 'react-router-dom';
import EditButton from '../../components/EditButton';
import '../dashboard/dashboard.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons";

const HouseIcon =
  <FontAwesomeIcon
    icon={faHome}
    size="4x"
    color="#23309E"
  />

const HouseholdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #DFDFDF;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  width: 60vw;
  margin: 30px;
  padding-left: 25px;
`

const EditIcon = styled.div`
  margin: 30px;
`

const AddressText = styled.p`
  font-size: 20px;
`

const HouseholdCard = (props) => { 

  return (  
    <HouseholdContainer>   
      <Link to={`/households/${props.id}`}>
        <div className="heading">
          <i>{HouseIcon}</i>
          <h3 className="card-title">{props.name}</h3>
        </div>           
        <div>
          <AddressText>{props.street} {props.city}, {props.state} {props.zipCode}</AddressText>  
        </div>
      </Link>
      <EditIcon>
        <Link to={`/households/${props.id}/edit`}>
          <EditButton />
        </Link> 
      </EditIcon>      
    </HouseholdContainer>    
  );
}

export default HouseholdCard;