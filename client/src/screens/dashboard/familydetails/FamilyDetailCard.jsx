import React from 'react';
import { Link } from 'react-router-dom';

import EditButton from '../../../components/EditButton'
import '../dashboard.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons";

const HouseIcon =
  <FontAwesomeIcon
    icon={faHome}
    size="4x"
    color="#23309E"
  />

const FamilyDetailContainer = styled.div`
  border: 2px solid #23309E;
  border-radius: 5px;
  margin: 50px;
  padding: 15px 25px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 150px 60%;
`


const FamilyDetailCard = (props) => {  
  return (     
    <FamilyDetailContainer>
      <div className="header-container">
        <div className="heading">
          <i>{HouseIcon}</i>
          <h3 className="card-title">{props.name}</h3>
        </div>       
        <Link to={`/households/${props.id}/edit`}>
          <EditButton />
        </Link>  
      </div>
      <Grid>
        <p className="card-labels">Address</p>
        <p className="card-text fam-font">{props.street} {props.city}, {props.state} {props.zipCode} </p>
        {props.tempLow  === null || props.tempHi === null
          ? null
          : <>
              <p className="card-labels">Temperature</p>
              <p className="card-text fam-font">{props.tempLow} - {props.tempHi}</p>
            </>            
        }        
        {props.wifiUsername  === null 
          ? null
          : <>
              <p className="card-labels">Wifi Username</p>
              <p className="card-text fam-font">{props.wifiUsername}</p>
            </>            
        }
        {props.wifiUsername  === null 
          ? null
          : <>
              <p className="card-labels">Wifi Password</p>
              <p className="card-text fam-font">{props.wifiPassword}</p>
            </>            
        }
        {props.notes  === null 
          ? null
          : <>
              <p className="card-labels">Notes</p>
              <p className="card-text fam-font">{props.notes}</p>
            </>            
        }       
      </Grid>
    </FamilyDetailContainer>      
  );
}

export default FamilyDetailCard;