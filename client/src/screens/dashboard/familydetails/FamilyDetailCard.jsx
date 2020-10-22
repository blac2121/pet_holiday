import React from 'react';
import { Link } from 'react-router-dom';

import EditButton from '../../../components/EditButton'
import '../dashboard.css';
import styled from 'styled-components';

const FamilyDetailContainer = styled.div`
  border: 2px solid #23309E;
  border-radius: 5px;
  margin: 50px;
  padding: 15px 25px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
`


const FamilyDetailCard = (props) => {  
  return (     
    <FamilyDetailContainer>
      <div className="header-container">
        <h3 className="card-title">{props.name}</h3>
        <Link to={`/households/${props.id}/edit`}>
          <EditButton />
        </Link>  
      </div>
      <Grid>
        <p className="card-labels">Address</p>
        <p className="card-text fam-font">{props.street} {props.city}, {props.state} {props.zipCode} </p>
        <p className="card-labels">Temperature</p>
        <p className="card-text fam-font">{props.tempLow} - {props.tempHi}</p>
        <p className="card-labels">Wifi Username</p>
        <p className="card-text fam-font">{props.wifiUsername}</p>
        <p className="card-labels">Wifi Password</p>
        <p className="card-text fam-font">{props.wifiPassword}</p>
        <p className="card-labels">Notes</p>
        <p className="card-text fam-font">{props.notes}</p>        
      </Grid>
    </FamilyDetailContainer>      
  );
}

export default FamilyDetailCard;